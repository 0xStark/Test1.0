<template>
  <div class="sigrollComponents">
    <!-- <div class="sigrollBg"></div> -->
    <!-- <div id="sigroll"></div> -->
    <!-- <spline
      :scene="splinecode"
    /> -->
	<iframe src="https://my.spline.design/untitledcopy-f5f9c01190619d13f1a299f220c5062f/" frameborder="0" style="width: 100%; height: 108%"></iframe>
    <!-- <div class="scrollDown"></div> -->
    <!-- <div class="content">
			<div class="Explore"></div>
			<div class="collaborative"></div>
			<div class="Your_NFT_Broker"></div>
			<div class="line"></div>
		</div> -->
  </div>
</template>

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import SplineLoader from '@splinetool/loader';
// import SplineLoader from 'three';
// import Spline from "vue-spline";

export default {
  mounted() {
    // this.initThree();
  },
  components: {
    // Spline,
  },
  data() {
    return {
		splinecode: 'https://prod.spline.design/YpxqD-eVuLJ81SgG/scene.splinecode'
	};
  },
  methods: {
    initThree() {
      const scene = new THREE.Scene();
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setSize(500, 500);
      document.getElementById("sigroll").appendChild(renderer.domElement);
      const camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 15;
      const gltfLoader = new GLTFLoader();
      gltfLoader.load("/img/sigroll.gltf", (gltf) => {
        var model = gltf.scene;
        model.scale.set(5, 5, 5);
        model.rotation.x = 0.2;
        model.rotation.y = 0.7;
        model.rotation.z = 0.5;
        // model.rotateX(THREE.MathUtils.degToRad(14));
        // model.rotateY(THREE.MathUtils.degToRad(30));
        // model.rotateZ(THREE.MathUtils.degToRad(26));

        scene.add(model);

        let angle = 0;

        function animate() {
          renderer.render(scene, camera);

          if (angle > 5) {
            angle = 0;
          }
          angle += 0.5;
          model.rotateY(THREE.MathUtils.degToRad(angle));

          // model.rotation.y = angle;

          requestAnimationFrame(animate);
        }
        animate();
      });
    },
  },
};
</script>

<style scoped>
.sigrollComponents {
  width: 100%;
  height: 100%;
  background-color: #fff;
  /* background-image: url(/img/Mask.png); */
  background-size: 100%;
  position: relative;
}

#sigroll {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -220px;
  margin-left: -250px;
  z-index: 99;
}

.sigrollBg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: url(/img/index/BG_line.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
}

.scrollDown {
  position: absolute;
  width: 56.89px;
  height: 56.89px;
  left: calc(50% - 56.89px / 2);
  bottom: 21px;
  background-image: url(/img/sectionSigroll/btn_ScrollDown.png);
  background-size: cover;
  background-repeat: no-repeat;
}

.content {
  position: absolute;
  width: 1440px;
  height: 100%;
  left: 50%;
  margin-left: -720px;
}

.Your_NFT_Broker {
  position: absolute;
  width: 302.22px;
  height: 194.67px;
  left: calc(50% - 302.22px / 2 - 387.55px);
  top: calc(50% - 194.67px / 2 - 4.33px);
  background-image: url(/img/sectionSigroll/Your_NFT_Broker.png);
  background-size: cover;
  background-repeat: no-repeat;
}

.line {
  position: absolute;
  width: 584px;
  height: 220.89px;
  left: 446px;
  top: 278px;
  background-image: url(/img/sectionSigroll/Line.png);
  background-size: cover;
  background-repeat: no-repeat;
}

.collaborative {
  position: absolute;
  width: 276.67px;
  height: 88px;
  left: calc(50% - 266.67px / 2 + 405.33px);
  top: calc(50% - 88px / 2 - 62.11px);
  background-image: url(/img/sectionSigroll/collaborative.png);
  background-size: cover;
  background-repeat: no-repeat;
}

.Explore {
  position: absolute;
  /* width: 266.67px; */
  /* height: 39.11px; */
  width: 326.67px;
  height: 49.11px;
  left: calc(50% - 366.67px / 2 + 405.33px);
  top: calc(50% - 59.11px / 2 + 99.44px);
  background-image: url(/img/sectionSigroll/btn_Explore.png);
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
