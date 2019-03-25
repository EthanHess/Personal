import React, { Component } from 'react';
import TheCube from './TheCube.js';
import * as THREE from 'three';
import stateToCubesMapping from './CubeMapping.js'; 
import './Games.css';

//Using bits and pieces from https://github.com/rogersanick/rubikscubesolver

class ThreeSceneRubiks extends Component {
    constructor() {
        super()
        //Positions
        let cubePositions = [];
        for (let z = 1; z >= -1; z--) {
            for (let y = -1; y <= 1; y ++) {
                for (let x = 1; x >= -1; x --) {
                cubePositions.push([x, y, z]);
            }
        }

        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
            rubiksArray: [
                    Array(9).fill('O'), 
                    Array(9).fill('B'), 
                    Array(9).fill('W'),
                    Array(9).fill('R'), 
                    Array(9).fill('Y'),
                    Array(9).fill('G'),
                  ],
            cubePositions: cubePositions,

            //Camera position
            camX: 0,
            camY: 0, 
            camZ: 0,
            camW: 0,
      
            //Colors
            colorCodes: {
                R: 0xFF0000,
                G: 0x008000,
                Y: 0xFFFF00,
                O: 0xFFA500,
                B: 0x0000FF,
                W: 0xffffff,
                P: 0xFFC0CB,
                Pu: 0x9400D3,
                Ru: 0xA55D35,
                inside: 0xFFFFFF
            },
            rerender: false,
            
            //Animation loop
            spinLeft: false,
            spinUp: false,
            spinRight: false,
            spinDown: false,
            currMove: '',
            globalBestPath: '',
            solved: false,
            party: false
        }
    }

    //No need to bind because => :)


    }

    animate = () => {
        this.renderScene();
        this.frameId = window.requestAnimationFrame(this.animate);
    }

    //This'll be fun
    makeItParty = () => {
        if (this.state.party === true) {
          let colors = ['O', 'B', 'W', 'R', 'Y', 'G'];
          let newState = [];
          for (let x = 0; x < 6; x ++) {
            let face = [];
            for (let x = 0; x < 9; x ++) {
              face.push(colors[Math.floor(Math.random()*colors.length)]);
            }
            newState.push(face);
          }
          this.setState({
            rubiksArray: newState, 
          }, () => {
            this.handleRenderCubeColorPositions();
            setTimeout(() => {this.makeItParty()}, 50);
          });
        }
      }

    setCubePositions = () => {

    }

    setListeners = () => {

    }

    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight, rerender: true }, () => {
          setTimeout((() => {this.setState({rerender: false})}), 800);
          setTimeout((() => {this.setState({rerender: true})}), 800);
        });
    }

    //Lifecycle
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);

        const width = window.innerWidth; 
        const height = window.innerWidth; 

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            90,
            width / height,
            0.1,
            10000
        )

        camera.position.z = 10
        camera.position.y = 3
        var cameraRotation = new THREE.Quaternion(this.state.camX, this.state.camY, this.state.camZ, this.state.camW)
        camera.setRotationFromQuaternion(cameraRotation)

        //cube constructor material
        const renderer = new THREE.WebGLRenderer({ antialias: true })
        const material = new THREE.MeshBasicMaterial({ color:0xffffff, vertexColors: THREE.FaceColors})

        //groups for cubes
        const groupCubes = new THREE.Group();
        const groupRotate = new THREE.Group();

        //for global access
        this.groupCubes = groupCubes;
        this.groupRotate = groupRotate;

        const cubes = {};
        this.cubes = cubes;

        const cubeGeometries = {};
        this.cubeGeometries = cubeGeometries;
        
        //cube coordinates
        for (let cubeNum = 0; cubeNum < 27; cubeNum++) {
            let aCubeMap = stateToCubesMapping[cubeNum];
            cubeGeometries[cubeNum] = new THREE.BoxGeometry(0.95, 0.95, 0.95);
            for ( let i = 0, c = 0; i < cubeGeometries[cubeNum].faces.length; i += 2, c++ ) {
              let hex;
              if (!!aCubeMap[c]) {
                let colorCode = this.state.rubiksArray[aCubeMap[c][0]][aCubeMap[c][1]];
                hex = this.state.colorCodes[colorCode];
              } else {
                hex = '0x000000';
              }
              cubeGeometries[cubeNum].faces[i].color.setHex( hex );
              cubeGeometries[cubeNum].faces[ i + 1 ].color.setHex( hex );
            }
            cubes[cubeNum] = new THREE.Mesh(cubeGeometries[cubeNum], material);
            this.groupCubes.add(cubes[cubeNum]);
        }

        this.groupCubes.add(groupRotate);
        for (let cubeNum in cubes) {
            cubes[cubeNum].position.set(...this.state.cubePositions[cubeNum]);
        }

        scene.add(this.groupCubes);

        this.groupCubes.rotation.x = 0.25;
        this.groupCubes.rotation.y = 0.75;

        renderer.setSize(width, height)

        //For moving
        const MoveQueue = function () {
            this.maxLength = 0;
            this.storage = [];
            this.enqueue = (move) => {
              if (Array.isArray(move)) {
                for (let singleMove of move) {
                  this.maxLength += 1;
                  this.storage.push(singleMove);
                }
              } else {
                this.maxLength += 1;
                this.storage.push(move);
              }
            }
            this.dequeue = () => {
              return this.storage.shift();
            }
            this.getLength = () => {
              return this.storage.length;
            }
            this.getMaxLength = () => {
              return this.maxLength;
            }
        }

        this.moveQueue = new MoveQueue();
        this.currRotate = 0;
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.material = material;
        this.cubes = cubes;
        this.cubeGeometries = cubeGeometries;
        this.count = 0;
        this.mount.appendChild(this.renderer.domElement)
        this.start()
    }

    componentWillUnmount() {
        this.stop()
        this.mount.removeChild(this.renderer.domElement)
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    start = () => {
        if (!this.frameId) {
          this.frameId = requestAnimationFrame(this.animate)
        }
    }
    
    stop = () => {
        cancelAnimationFrame(this.frameId)
    }

    renderScene = () => {
        this.renderer.render(this.scene, this.camera)
    }

    handleResetPosition = () => {
        this.groupCubes.rotation.x = 0.25;
        this.groupCubes.rotation.y = 0.75;
    }

    handleReset = () => {
        this.setState({
          rubiksArray: [
            Array(9).fill('O'), 
            Array(9).fill('B'), 
            Array(9).fill('W'), 
            Array(9).fill('R'), 
            Array(9).fill('Y'),
            Array(9).fill('G'),
          ]
        }, () => {
          this.handleResetPosition();
          this.handleRenderCubeColorPositions();
        });
    }

    render() {
        return (
            <div className="rubiks_container">
                <div className = "canvas" ref={(mount) => { this.mount = mount }}>
                    <TheCube width = {this.state.width * 0.7} height = {this.state.height} rerender = {this.state.rerender}/>
                </div>
            </div>
        )
    }
}

export default ThreeSceneRubiks