// Create the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight); // Set to full window size
document.getElementById('three-canvas').appendChild(renderer.domElement);

// Create a light blue cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0xadd8e6 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Set camera position and look at the center of the scene
camera.position.set(0, 0, 5); // Camera is positioned back along the Z-axis
camera.lookAt(0, 0, 0); // Make the camera look at the center of the scene

// Add ambient light (optional)
const light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

// Resize the renderer and camera on window resize
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight; // Set height to full window height
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

// Start the animation
animate();
