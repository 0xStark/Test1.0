<template>
	<div class="sigrollComponents">
		<div class="sigrollBg"></div>
		<div id="sigroll"></div>
		<div class="content">
			<div class="text1"></div>
			<div class="text2"></div>
			<div class="left"></div>
			<div class="right"></div>
			<div class="line"></div>
		</div>
	</div>
</template>

<script>
	import * as THREE from 'three'
	import {
		GLTFLoader
	} from 'three/examples/jsm/loaders/GLTFLoader.js'
	export default {
		mounted() {
			this.initThree()
		},
		methods: {
			initThree() {
				const scene = new THREE.Scene()
				// scene.background = new THREE.Color('#eee')
				const renderer = new THREE.WebGLRenderer({
					antialias: true,
					alpha: true
				})
				renderer.setSize(500, 500);
				document.getElementById('sigroll').appendChild(renderer.domElement);
				const camera = new THREE.PerspectiveCamera(
					50,
					window.innerWidth / window.innerHeight,
					0.1,
					1000
				)
				camera.position.z = 15

				const gltfLoader = new GLTFLoader()
				gltfLoader.load('/img/sigroll.gltf', (gltf) => {
					var model = gltf.scene
					model.scale.set(5, 5, 5);
					model.rotateX(120);
					model.rotateY(270);
					model.rotateZ(75);

					scene.add(model)

					function animate() {
						model.rotation.x += 0.01
						model.rotation.y += 0.01
						model.rotation.z += 0.01
						renderer.render(scene, camera)
						requestAnimationFrame(animate)
					}
					animate()
				})
			},
		},
	}
</script>

<style scoped>
	.sigrollComponents {
		width: 100%;
		height: 100%;
		background-color: #fff;
		background-image: url(/img/Mask.png);
		background-size: 100%;
		position: relative;
	}

	#sigroll {
		position: absolute;
		left: 50%;
		top: 50%;
		margin-top: -260px;
		margin-left: -260px;
		z-index: 99;
	}

	.sigrollBg {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-image: url(/img/index/BG_line.png);
		background-size: 100%;
	}
	
	.content {
		position: absolute;
		width: 1440px;
		height: 100%;
		left: 50%;
		margin-left: -720px;
	}

	.text1 {
		position: absolute;
		width: 171px;
		height: 203px;
		left: 82px;
		top: 56px;
		background-image: url(/img/index/index_text_1.png);
		background-size: 100%;
		background-repeat: no-repeat;
	}

	.text2 {
		position: absolute;
		width: 163px;
		height: 290px;
		right: 82px;
		bottom: 56px;
		background-image: url(/img/index/index_text_2.png);
		background-size: 100%;
		background-repeat: no-repeat;
	}

	.left {
		position: absolute;
		width: 304px;
		height: 139px;
		left: 82px;
		top: 468px;
		background-image: url(/img/index/Left.png);
		background-size: 100%;
		background-repeat: no-repeat;
	}

	.right {
		position: absolute;
		width: 304px;
		height: 59px;
		left: 1054px;
		top: 113px;
		background-image: url(/img/index/Right.png);
		background-size: 100%;
		background-repeat: no-repeat;
	}

	.line {
		position: absolute;
		width: 668px;
		height: 450px;
		/* left: calc(50% - 668px/2 + 668px);
		top: calc(50% - 435px/2 + 425.5px); */
		top: 127px;
		left: 386px;
		background-image: url(/img/index/Line.png);
		background-size: 100%;
		background-repeat: no-repeat;
	}
</style>
