// var axis = new THREE.AxisHelper(4);//显示三维坐标系
// scene.add(axis);
renderer.setClearColor(new THREE.Color(0x7FFFD4));

var grid = new THREE.GridHelper( 1000, 200, 0xE9967A, 0x9932CC);
// var tableMaterial = new THREE.MeshBasicMaterial({
// 	map: new THREE.TextureLoader().load("img/table.jpg"),
// 	});
// var meshGrid = new THREE.Mesh(grid, tableMaterial);
scene.add(grid);

grid.position.set(0,-14,0);

// let backgroundLoader = new THREE.TextureLoader();
// let bgTexture = backgroundLoader.load("img/bg.jpg");
// scene.background = bgTexture;