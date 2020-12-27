//@prepros-append 3d.js


scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5; //позиция камеры


renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setClearColor(0x000000, 0);
renderer.setSize(320, 420);  //сжимаемость по осям!

renderer.domElement.setAttribute("class", "test");
document.body.insertBefore(renderer.domElement, document.body.firstChild);

const aLight = new THREE.AmbientLight(0x404040, 1.2);
scene.add(aLight);

const pLight = new THREE.PointLight(0xffffff, 1.2);
pLight.position.set(0, -3, 7) //управление тенями
scene.add(pLight);

//const helper = new THREE.PointLightHelper(pLight);
//scene.add(helper);

let loader = new THREE.GLTFLoader();
let obj = null;

loader.load('img/scene.gltf', function (gltf) {
   obj = gltf;
   obj.scene.scale.set(0.2, 0.2, 0.2);

   scene.add(obj.scene);
});


function animate() {
   requestAnimationFrame(animate);
   if (obj)
      obj.scene.rotation.y += 0.01;
   renderer.render(scene, camera);
}
animate();


$.each($('.spoller.active'), function(index, val) {
	$(this).next().show();
});
$('body').on('click','.spoller',function(event) {
	if($(this).hasClass('mob') && !isMobile.any()){
		return false;
	}
	if($(this).hasClass('closeall') && !$(this).hasClass('active')){
		$.each($(this).closest('.spollers').find('.spoller'), function(index, val) {
			$(this).removeClass('active');
			$(this).next().slideUp(300);
		});
	}
	$(this).toggleClass('active').next().slideToggle(300,function(index, val) {
			if($(this).parent().find('.slick-slider').length>0){
				$(this).parent().find('.slick-slider').slick('setPosition');
			}
	});
	return false;
});


