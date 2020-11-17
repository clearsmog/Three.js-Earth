var earthGeometry = new THREE.SphereGeometry(4, 100, 100);
var earthMaterial = new THREE.MeshPhongMaterial({
	map: new THREE.ImageUtils.loadTexture("img/earth.jpg"), 
	color: 0xaaaaaa, 
	specular: 0x333333, 
	shininess: 25, 
	side: THREE.DoubleSide,     
});

var earth = new THREE.Mesh(earthGeometry, earthMaterial);
earth.position.set(0,5.6, 0);
earth.castShadow = true; 
group.add(earth);

var render = function () {
	earth.rotation.y += 0.008;
	renderer.render(scene, camera);
	requestAnimationFrame(render);	//更新动画
};
render();