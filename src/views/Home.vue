<template>
  <div class="home">
    <div class="homeBg"></div>
    <section class="homeTop homeTop01">
      <SectionMarquee :msg="marqueeText1" direction="left" />
    </section>
    <section class="homeBanner">
      <SectionSigroll />
    </section>
    <section class="homeTop homeTop02">
      <SectionMarquee :msg="marqueeText2" direction="right" />
    </section>

    <div class="homeContainer">
      <div class="homeContainerBg homeContainerBg01">
        <!-- <img src="/img/BG_GradientColor.png" /> -->
        <!-- <img src="/img/BG_GradientColor_01.png" /> -->
      </div>
      <div class="homeContainerBg homeContainerBg02">
        <!-- <img src="/img/BG_GradientColor_02.png" /> -->
      </div>
      <section class="section section01">
        <div class="container">
          <div class="homeContent section01Hd">
            <vue-typed-js
              :strings="['Content', 'Brand', 'Lifestyle', 'Community']"
              :typeSpeed="100"
              :loop="true"
            >
              <div class="homeContentHd">
                <span class="typing"></span> For everyone
              </div>
            </vue-typed-js>
            <!-- <div class="homeContentHd"><span>Content</span> For everyone</div> -->
            <div class="homeContentDes">
              Web 2.0 or Web 3.0, we are laying the foundation for a new era of
              content-centric experience full of limitless possibilities.
            </div>
          </div>
          <div class="homeVision" id="OurVisions">
            <div class="homeVisionCont">
              <!-- <div class="columns is-mobile">
                <div class="column">
                  <div class="homeVisionWrap">
                    <div class="homeVisionIco">
                      <img src="/icon/Frame01.png" alt="" />
                    </div>
                    <div class="homeVisionTitle">
                      Peer-to-peer <br />
                      On-chain Licensing
                    </div>
                    <div class="homeVisionDes">
                      Obtain and request authorized licenses on our platform and
                      easily trace your approved derivative projects.
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="homeVisionWrap">
                    <div class="homeVisionIco">
                      <img src="/icon/Frame02.png" alt="" />
                    </div>
                    <div class="homeVisionTitle">
                      Utilities and Earnings beyond Trading
                    </div>
                    <div class="homeVisionDes">
                      Earn rewards and royalties by making your NFT "usable",
                      set up social engagements and roll with your community.
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="homeVisionWrap">
                    <div class="homeVisionIco">
                      <img src="/icon/Frame03.png" alt="" />
                    </div>
                    <div class="homeVisionTitle">
                      Built with the Power of Decentralization
                    </div>
                    <div class="homeVisionDes">
                      With multi-chain support, we empower ecosystem-agnostic
                      participations centered around your beloved NFT and its
                      fandom.
                    </div>
                  </div>
                </div>
              </div> -->
              <div class="columns is-variable is-mobile is-8">
                <div class="column">
					<div class="homeVisionTitle">
                      Peer-to-peer <br />
                      On-chain Licensing
                    </div>
                    <div class="homeVisionDes">
                      Obtain and request authorized licenses on our platform and
                      easily trace your approved derivative projects.
                    </div>
				</div>
                <div class="column">
					<div class="homeVisionTitle">
                      Utilities and Earnings <br /> beyond Trading
                    </div>
                    <div class="homeVisionDes">
                      Earn rewards and royalties by making your NFT "usable",
                      set up social engagements and roll with your community.
                    </div>
				</div>
                <div class="column">
					<div class="homeVisionTitle">
                      Built with the Power of <br /> Decentralization
                    </div>
                    <div class="homeVisionDes">
                      With multi-chain support, we empower ecosystem-agnostic
                      participations centered around your beloved NFT and its
                      fandom.
                    </div>
				</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="sectionWorks">
        <div class="container">
          <div class="sectionWorksHd">How it works</div>
          <div class="sectionWorksWrap">
            <div class="columns is-mobile sectionWorksColumns">
              <div class="column">
                <div class="sectionWorksGrop sectionWorksVideo">
                  <video
                    id="worksVideo01"
                    class="video-js vjs-default-skin"
                    preload="auto"
                  >
                    <source :src="vodeoUrl01" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div class="column">
                <div
                  class="
                    sectionWorksGrop
                    sectionWorksCont
                    sectionWorksContRight
                  "
                >
                  <div class="sectionWorksInner">
                    <div class="sectionWorksNum">01 /</div>
                    <div class="sectionWorksTitle">
                      Roll out your NFTs to the world.
                    </div>
                    <div class="sectionWorksDes">
                      We help you to team up with the creators and communities
                      to bring your NFTs to life. Set up your licenses and World
                      Build with your community.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns is-mobile sectionWorksColumns">
              <div class="column">
                <div
                  class="sectionWorksGrop sectionWorksCont sectionWorksContLeft"
                >
                  <div class="sectionWorksInner">
                    <div class="sectionWorksNum">02 /</div>
                    <div class="sectionWorksTitle">Fast. Easy. Search.</div>
                    <div class="sectionWorksDes">
                      We give you access to the first-ever decentralized IP pool
                      to build from. Initiate and create worlds and experiences
                      that unfold over time.
                    </div>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="sectionWorksGrop sectionWorksVideo">
                  <video
                    id="worksVideo02"
                    class="video-js vjs-default-skin"
                    preload="auto"
                  >
                    <source :src="vodeoUrl02" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
            <div class="columns is-mobile sectionWorksColumns">
              <div class="column">
                <div class="sectionWorksGrop sectionWorksVideo">
                  <video
                    id="worksVideo03"
                    class="video-js vjs-default-skin"
                    preload="auto"
                  >
                    <source :src="vodeoUrl03" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div class="column">
                <div
                  class="
                    sectionWorksGrop
                    sectionWorksCont
                    sectionWorksContRight
                  "
                >
                  <div class="sectionWorksInner">
                    <div class="sectionWorksNum">03 /</div>
                    <div class="sectionWorksTitle">
                      Media franchises. Simplified.
                    </div>
                    <div class="sectionWorksDes">
                      Get up and running in a few seconds. We take care of the
                      license processing and deal experience so you can focus on
                      building value.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section03">
        <div class="container">
          <div class="homeAbout">
            <div class="homeAboutTitle">Welcome to the revolution</div>
            <div class="homeAboutDes">
              Made for Owners, Artists & Communities. At Sigroll, we’re building
              the future of creating contents, radically democratizing what gets
              built, by whom, and for whom.
            </div>
          </div>
          <div class="homeSearch">
            <div class="homeSearchWrap">
              <div class="fr" @click="sendEmail()">Join Waitlist</div>
              <div class="inner">
                <input
                  type="text"
                  v-model="email"
                  placeholder="Enter your email here..."
                />
                <!-- <b-input ></b-input> -->
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section class="section04">
      <div class="container"></div>
    </section>
  </div>
</template>

<script>
import { WOW } from "wowjs";
import { VueTypedJs } from "vue-typed-js";
import videojs from "video.js";
import "videojs-contrib-hls";
import "@videojs/http-streaming";
import SectionMarquee from "@/views/Home/SectionMarquee.vue";
import SectionSigroll from "@/views/Home/SectionSigroll.vue";
export default {
  name: "Home",
  components: {
    SectionMarquee,
    SectionSigroll,
    VueTypedJs,
  },
  data() {
    return {
      player01: null,
      vodeoUrl01: require("@/assets/video/animation1_compressed.mp4"),
      player02: null,
      vodeoUrl02: require("@/assets/video/animation2_compressed.mp4"),
      player03: null,
      vodeoUrl03: require("@/assets/video/animation3_compressed.mp4"),
      marqueeText1:
        "Sigroll is a Collaborative Ecosystem that grants commercialization and expansion of your NFTs via on-chain licensing",
      marqueeText2: "Welcome onboard to the owner-centric future",
      email: "",
      holdersList: [
        {
          title: "Set up your NFT Profile",
          des: "Connect your wallet and select the NFT(s) you’d like to list. We also provide configurable minting tools to create new NFT(s) and collections.",
        },
        {
          title: "Manage your Licenses",
          des: "Establish a fixed license price or simply list for offers. You may set a duration for the license, or reserve the license for a specific indie creator or project founder. ",
        },
        {
          title: "World Build with your Community",
          des: "Explore eligible bounties or initiate community building centered around your NFTs. Authorize license, claim rewards and wait for your NFT to skyrocket with the add-on value from co-building.",
        },
      ],
      fanssList: [
        {
          title: "Initiate your Project Blueprints",
          des: "Log in to your account, describe your project and select your desired NFTs. You may send direct request to listed NFTs or initiate a bounty to the public.",
        },
        {
          title: "Configure your Bounty",
          des: "Set up payment schemes, deposit rewards, create legal docs, and more in just a few clicks using our proposal framework and out-of-the-box tools.",
        },
        {
          title: "Crowdfund your wanted Licenses",
          des: "Use the power of community. Jumpstart your project with exclusive NFT communities and get early feedback and backing instead of taking a shot in the dark.",
        },
      ],
    };
  },
  mounted() {
    this.$parent.color = `#000`;
    this.$parent.backgroundColor = "#fff";
    let wow = new WOW({
      boxClass: "wow", //需要执行动画的元素的 class
      animateClass: "animated", //animation.css 动画的 class
      offset: 0, //距离可视区域多少开始执行动画
      mobile: true, //是否在移动设备上执行动画
      live: true, //异步加载的内容是否有效
    });
    wow.init();

    this.videoInit("player01", "worksVideo01");
    this.videoInit("player02", "worksVideo02");
    this.videoInit("player03", "worksVideo03");
  },
  methods: {
    sendEmail() {
      var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (!reg.test(this.email)) {
        this.$buefy.toast.open({
          message: "Please enter a valid email!",
          type: "is-danger",
        });
        return;
      }
      this.$buefy.toast.open({
        message: "Success!",
        type: "is-success",
      });
    },
    videoInit(name, id) {
      // 播放器初始化
      this[name] = videojs(
        id,
        {
          bigPlayButton: false,
          textTrackDisplay: false,
          posterImage: true,
          errorDisplay: false,
          controlBar: true,
          loop: true,
          muted: true, //静音模式 、、 解决首次页面加载播放。
        },
        function () {
          this.play(); // 自动播放
        }
      );
    },
  },
  // 离开页面销毁视频播放器
  beforeDestroy() {
    if (this.player01 != null) {
      this.player01.dispose(); // dispose()会直接删除Dom元素
    }
  },
};
</script>

<style>
</style>
