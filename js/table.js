var table = new THREE.BoxBufferGeometry(15,0.6,15,10,10,10);
var tableMaterial = new THREE.MeshBasicMaterial({
	map: new THREE.TextureLoader().load("img/table.jpg"),
	});
let meshTable = new THREE.Mesh(table, tableMaterial);
meshTable.position.set(0,-6,0);
meshTable.castShadow = meshTable.receiveShadow = true;
	
var tableSupport = new THREE.BoxBufferGeometry(0.6,8,0.6,10,10,10);
var tableSupportMaterial = new THREE.MeshPhongMaterial({
	map: new THREE.TextureLoader().load("img/tableSupport.jpg"),
	color: 0xaaaaaa,
	specular: 0x333333, 
	shininess: 25, 
	// color:0xFFE4C4,
});
// var tableSupportMaterial = new THREE.MeshBasicMaterial({
// 	map: new THREE.TextureLoader().load("img/tableSupport.jpg"),
// 	// color:0xFFE4C4,
// });
var ts1 = new THREE.Mesh(tableSupport, tableSupportMaterial);
var ts2 = new THREE.Mesh(tableSupport, tableSupportMaterial);
var ts3 = new THREE.Mesh(tableSupport, tableSupportMaterial);
var ts4 = new THREE.Mesh(tableSupport, tableSupportMaterial);
ts1.position.set(5,-10,5);
ts2.position.set(-5,-10,-5);
ts3.position.set(-5,-10,5);
ts4.position.set(5,-10,-5);

ts1.castShadow = ts1.receiveShadow = true;
ts2.castShadow = ts2.receiveShadow = true;
ts3.castShadow = ts3.receiveShadow = true;
ts4.castShadow = ts4.receiveShadow = true;

var tableEntity = new THREE.Group();
tableEntity.add(ts1);
tableEntity.add(ts2);
tableEntity.add(ts3);
tableEntity.add(ts4);
tableEntity.add(meshTable);
tableEntity.position.set(0,0.5,0);
scene.add(tableEntity);