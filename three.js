// Importer la bibliothèque Three.js si nécessaire
// Assurez-vous d'inclure <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script> dans votre fichier HTML


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

// function to rotate the object.
function animate() {
  requestAnimationFrame(animate);

  // rotate the object around the z axis
  board.rotation.z += 0.003;

  renderer.render(scene, camera);
}

animate();