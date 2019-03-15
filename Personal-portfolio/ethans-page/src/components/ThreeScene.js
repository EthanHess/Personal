import React, { Component } from 'react';
import * as THREE from 'three';

class ThreeScene extends Component{

  //Initial example https://medium.com/@colesayershapiro/using-three-js-in-react-6cb71e87bdf4

componentDidMount(){
    this.sceneSetup()
}

sceneSetup = () => {
    // const width = this.mount.clientWidth
    // const height = this.mount.clientHeight

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
    this.renderer.setSize(width, height) //TODO update
    this.mount.appendChild(this.renderer.domElement)
    //ADD CUBE
    const geometry = new THREE.BoxGeometry(1, 2, 2)
    //'#433F81'
    const material = new THREE.MeshBasicMaterial({ color: '#3879e2'})
    this.cube = new THREE.Mesh(geometry, material)
    this.scene.add(this.cube)

    this.addSperes()
    this.start()
}

addSperes = () => {
    const geometry = new THREE.SphereGeometry()
    const material = new THREE.MeshBasicMaterial({ color: '#d81c3b'})
    this.sphere = new THREE.Mesh(geometry, material)
    this.scene.add(this.sphere)
}

//TODO finish
addCubes = () => {
    const cubes = []
    for (let cube in cubes) {
        this.scene.add(cube)
    }
}

componentWillUnmount(){
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
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

render(){
    return(
      <div
        style={{ width: '400px', height: '400px' }}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}

export default ThreeScene