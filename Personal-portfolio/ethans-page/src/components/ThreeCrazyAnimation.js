import React, { Component } from 'react';
import * as THREE from 'three';

import myImage from '..//Images/galaxyOne.jpg'; 
import myImageMW from '..//Images/milkyway.jpg'; 
import myBackground from '..//Images/starsTwo.jpg'; 

class ThreeCrazyAnimation extends Component {
    componentDidMount() {
        this.sceneSetup()
    }

    sceneSetup = () => {
        const width = window.innerWidth
        const height = window.innerHeight
        //ADD SCENE
        this.scene = new THREE.Scene()
        //ADD CAMERA
        this.camera = new THREE.PerspectiveCamera(
            75,
            width / height,
            0.1,
            1000
        )
        this.camera.position.z = 5
        //ADD RENDERER
        this.renderer = new THREE.WebGLRenderer({ antialias: true })
        this.renderer.setClearColor('#000000') //Is BG, change?
        this.renderer.setSize(width / 2, height / 2) //TODO update
        this.mount.appendChild(this.renderer.domElement)
        //ADD CUBE + SPHERE(S)
        //this.addCubes()
        //this.addSpheres()
        //this.lighting()
        this.textureLoaderText()
        this.backgroundImageTexture()
        this.cubeTextureLoader()
        // this.start()
        
        setTimeout(this.start, 1000)
    }

    componentWillUnmount(){
        this.stop()
        this.mount.removeChild(this.renderer.domElement)
    }

    lighting = () => {
        var lights = []
        lights[0] = new THREE.PointLight(0x304ffe, 1, 0)
        lights[1] = new THREE.PointLight(0xffffff, 1, 0)
        lights[2] = new THREE.PointLight(0xffffff, 1, 0)
        lights[0].position.set(0, 200, 0)
        lights[1].position.set(100, 200, 100)
        lights[2].position.set(-100, -200, -100)
        this.scene.add(lights[0])
        this.scene.add(lights[1])
        this.scene.add(lights[2])
    }

    backgroundImageTexture = () => {
        var tempThis = this; //Pre ES6 way, update?
        const textureLoader = new THREE.TextureLoader()
        textureLoader.load(myBackground, function(texture) {
            tempThis.scene.background = texture; 
        })
    }

    textureLoaderText = () => {
        var tempThis = this;
        const textureLoader = new THREE.TextureLoader()
        textureLoader.load(myImage, function(texture) {
            const mat = new THREE.MeshLambertMaterial({
                transparent: false,
                opacity: 1,
                map: texture
            })
            // tempThis.sphereTwo = new THREE.Mesh(new THREE.SphereGeometry(1, 10, 10), mat)
            // tempThis.sphereTwo.overdraw = true; 
            // tempThis.scene.add(tempThis.sphereTwo)
            setTimeout(tempThis.addSpheres(mat), 1000) 
        })
    }

    cubeTextureLoader = () => {
        var tempThis = this;
        const textureLoader = new THREE.TextureLoader()
        textureLoader.load(myImageMW, function(texture) {
            const mat = new THREE.MeshLambertMaterial({
                transparent: false,
                opacity: 1,
                map: texture
            })
            setTimeout(tempThis.addCubes(mat), 1000)
        })
    }

    addCubes = (material) => {
        console.log('material for cube', material) // not using atm, but let's see if it's there
        const geometry = new THREE.BoxGeometry(0.5, 3, 3)
        const theMaterial = new THREE.MeshBasicMaterial({ color: '#197EE3'})
        this.cube = new THREE.Mesh(geometry, theMaterial)
        this.scene.add(this.cube)
    }

    addSpheres = (material) => {
        console.log('material for sphere', material)
        const geometry = new THREE.SphereGeometry()
        const theMaterial = new THREE.MeshBasicMaterial({ color: '#0F4B88'})
        this.sphere = new THREE.Mesh(geometry, theMaterial)
        this.scene.add(this.sphere)
    }

    start = () => {
        if (!this.frameId) {
          this.frameId = requestAnimationFrame(this.animate)
        }
    }
    
    stop = () => {
        cancelAnimationFrame(this.frameId)
    }

    animate = () => {
        this.cube.rotation.x += 0.01
        this.cube.rotation.y += 0.01
        this.renderScene()
        this.frameId = window.requestAnimationFrame(this.animate)
     }
     
    renderScene = () => {
        this.renderer.render(this.scene, this.camera)
    }

    render() {
        return(
          <div
            style={{ width: '800px', height: '800px' }}
            ref={(mount) => { this.mount = mount }}
          />
        )
      }

}

export default ThreeCrazyAnimation