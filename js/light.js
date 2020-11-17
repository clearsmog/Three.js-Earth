var light; 
 function initLight() { 
 light = new THREE.SpotLight(0xffffff,0.5); 
 // light.position.set(50,30,50); 
 light.position.set(44,33,44); 
 light.castShadow = true;
 scene.add(light); 
 } 
initLight();

var light0 = new THREE.AmbientLight(0x888888);
scene.add(light0);
light0.castShadow = true;

var light1 = new THREE.DirectionalLight(0xfdfcf0);
light1.position.set(-10, 40, -10);
// light1.castShadow = true;
scene.add(light1);


