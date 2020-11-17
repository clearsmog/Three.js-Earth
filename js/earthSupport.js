var metalMaterial = new THREE.MeshPhysicalMaterial({
  color:0xE9E9D8,
  // 材质像金属的程度. 非金属材料，如木材或石材，使用0.0，金属使用1.0
  metalness: 1.0,
  // 材料的粗糙程度. 0.0表示平滑的镜面反射，1.0表示完全漫反射. 默认 0.5
  roughness: 0.6,
});

var pillarGeometry = new THREE.CylinderGeometry(0.3,0.3,3);	//创建圆柱体
var pillar = new THREE.Mesh(pillarGeometry, metalMaterial);
pillar.position.set(0,1.5,0);
pillar.castShadow = true; 

var standGeometry = new THREE.CylinderGeometry(2,2,0.2,100);
var stand = new THREE.Mesh(standGeometry, metalMaterial);
stand.position.set(0,0.1,0);
stand.castShadow = true; 

var supportGeometry = new THREE.CylinderGeometry(0.1,0.1,0.4,100);
var support_up = new THREE.Mesh(supportGeometry, metalMaterial);
support_up.position.set(1.8,1.8,0);
support_up.rotation.set(0.1,0.1,0.4);
var support_down = new THREE.Mesh(supportGeometry, metalMaterial);
support_down.position.set(-1.8,9.2,0);
support_down.rotation.set(0.1,0.1,0.4);
support_up.castShadow = true; 
support_down.castShadow = true; 

var ringGeometry = new THREE.RingGeometry(4.2,4.3,100,100,90,Math.PI);	//创建圆环
// var ringMaterial = new THREE.MeshBasicMaterial( { 
// 	color: 0xff0 ,
// 	});
var ring = new THREE.Mesh(ringGeometry, metalMaterial);
ring.position.set(0,5.5,0);
ring.castShadow = true; 

group.add(pillar);
group.add(stand);
group.add(support_up);
group.add(support_down);
group.add(ring);