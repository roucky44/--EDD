const scene = new THREE.Scene(); //init scene 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); //init camera
const renderer = new THREE.WebGLRenderer({alpha: true}); // alpha = transparency
renderer.setSize(window.innerWidth, window.innerHeight); //init setsize for screen
document.body.appendChild(renderer.domElement);

// load object
const textureLoader = new THREE.TextureLoader();
const boardTexture = textureLoader.load('assets/model/board.jpg'); // need to start from the root of three.js

// create object geometry
const boardGeometry = new THREE.PlaneGeometry(10, 10); // size
const boardMaterial = new THREE.MeshBasicMaterial({ map: boardTexture });
const board = new THREE.Mesh(boardGeometry, boardMaterial);

// rotation for flat surface
board.rotation.x = -Math.PI / 2;
scene.add(board);

// camera positioning 
camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0);

// add a light in depth for more details
const light = new THREE.PointLight(0xffffff, 10, 100);
light.position.set(5, 5, 5);
scene.add(light);

// lights that moves :D
const movingLight1 = new THREE.PointLight(0xff0000, 2, 50); // Lumière rouge
const movingLight2 = new THREE.PointLight(0x0000ff, 2, 50); // Lumière bleue
scene.add(movingLight1, movingLight2);

let time = 0; //animation request

// function to rotate the object.
function animate() {
  requestAnimationFrame(animate);

  // rotate the object around the z axis
  board.rotation.z += 0.003;

  // animation of the lights
  time += 0.01;
  movingLight1.position.set(5 * Math.cos(time), 5, 5 * Math.sin(time)); // Mouvement circulaire
  movingLight2.position.set(5 * Math.sin(time), 5, 5 * Math.cos(time));

  renderer.render(scene, camera);
}

animate();