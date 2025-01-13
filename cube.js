import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75 /* FOV */, window.innerWidth / window.innerHeight, 0.1 /* min render distance */ , 1000 /* max render distance */);

const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 2;
camera.position.y = 1;


camera.lookAt( new THREE.Vector3 ( 0, 0, 0 ));

function animate() {

	cube.rotation.y += 0.003;

	renderer.render( scene, camera );
}