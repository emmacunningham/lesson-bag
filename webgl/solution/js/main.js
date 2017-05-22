// Set up scene
var scene = new THREE.Scene();

// Set up camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 1000);

// Set up renderer
var renderer =  new THREE.WebGLRenderer({alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a cube
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshNormalMaterial();
var cube = new THREE.Mesh(geometry, material);

scene.add(cube);

// Create a bunch of spheres
// var particles = [];
// for (var i = 0; i < 500; i++) {

// 	var sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
// 	var sphereMaterial = new THREE.MeshNormalMaterial();
// 	var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

// 	sphere.position.x = Math.random() * 500 - 250;
// 	sphere.position.y = Math.random() * 500 - 250;
// 	sphere.position.z = Math.random() * 500 - 250;

// 	scene.add(sphere);
// 	particles.push(sphere);
// }

// Create the particles variables
var particleCount = 1000,
	particles = new THREE.Geometry(),
	pMaterial = new THREE.PointsMaterial({
		color: "#f0f",
		size: 10
	});

for (var p = 0; p < particleCount; p++) {
	var pX = Math.random() * 500 - 250,
		pY = Math.random() * 500 - 250,
		pZ = Math.random() * 500 - 250,
		particle = new THREE.Vector3(pX, pY, pZ);
	// add particle to geometry as a vertex
	particles.vertices.push(particle);

}

var particleSystem = 
	new THREE.Points(particles, pMaterial);

scene.add(particleSystem);

camera.position.z = 5;


// Render it all!
function render() {
	requestAnimationFrame(render);

	cube.rotation.x += .01;
	cube.rotation.y += .01;

	// for (var i = 0; i < particles.length; i++) {
	// 	particles[i].position.z += .1;
	// }

	particleSystem.rotation.x += .01;

	renderer.render(scene, camera);
}
render();

$(document).mousemove(function(event) {
	var x = event.pageX / window.innerWidth;
	var y = event.pageY / window.innerHeight;

	camera.rotation.x = x;
	camera.rotation.y = y;
})
