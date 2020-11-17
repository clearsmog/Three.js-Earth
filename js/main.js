import('../js/light.js')
import('../js/earth.js')
import('../js/earthSupport.js')
import('../js/table.js')
import('../js/plane.js')
import('../js/planePlus.js')
import('../js/helper.js')

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
var renderer = new THREE.WebGLRenderer({
	antialias: true,
	alpha: false
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true; 
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setClearColor(new THREE.Color(0xE0FFFF));
document.body.appendChild(renderer.domElement);
camera.position.set(0, 0, 40);

var group = new THREE.Group();
group.position.set(0,-5.2,0);
scene.add(group);

var orbit = new THREE.OrbitControls(camera, renderer.domElement);