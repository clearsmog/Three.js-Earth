 //底部平面 
 var planeGeometry = new THREE.PlaneGeometry(100,100); 
 // var planeMaterial = new THREE.MeshStandardMaterial({color:0xFFEBCD}); 
var planeMaterial = new THREE.MeshLambertMaterial({color:0xffffff});
 var plane = new THREE.Mesh(planeGeometry, planeMaterial); 
 plane.rotation.x = - 0.5 * Math.PI; 
 plane.position.set(0,-12,0);
  
 //告诉底部平面需要接收阴影 
plane.receiveShadow = true; 

 scene.add(plane); 