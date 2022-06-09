<template>
  <div class="home">
    <div class="homeTop homeTop01">
      <p>
        <span>
          Sigroll is a Collaborative Ecosystem that grants commercialization and
          expansion of your NFTs via on-chain licensing
        </span>
        <span> /// </span>
        <span>
          Sigroll is a Collaborative Ecosystem that grants commercialization and
          expansion of your NFTs via on-chain licensing
        </span>
        <span> /// </span>
        <span>
          Sigroll is a Collaborative Ecosystem that grants commercialization and
          expansion of your NFTs via on-chain licensing
        </span>
      </p>
    </div>
    <div class="homeBanner">
      <Sigroll />
    </div>
    <div class="homeTop homeTop02">
      <p>
        <span> Welcome onboard to the owner-centric future </span>
        <span> /// </span>
        <span> Welcome onboard to the owner-centric future </span>
        <span> /// </span>
        <span> Welcome onboard to the owner-centric future </span>
        <span> /// </span>
        <span> Welcome onboard to the owner-centric future </span>
        <span> /// </span>
        <span> Welcome onboard to the owner-centric future </span>
        <span> /// </span>
        <span> Welcome onboard to the owner-centric future </span>
        <span> /// </span>
        <span> Welcome onboard to the owner-centric future </span>
      </p>
    </div>
    <div class="homeContainer">
      <div class="homeContainerBg homeContainerBg01">
        <img src="/img/BG_GradientColor.png" />
      </div>
      <div class="homeContainerBg homeContainerBg02">
        <img src="/img/BG_GradientColor_02.png" />
      </div>
      <section class="section section01">
        <div class="container">
          <div class="homeContent">
            <vue-typed-js :strings="['Content', 'Brand', 'Lifestyle', 'Community']" :typeSpeed="100" :loop="true">
              <div class="homeContentHd"><span class="typing"></span> For everyone</div>
            </vue-typed-js>
            <!-- <div class="homeContentHd"><span>Content</span> For everyone</div> -->
            <div class="homeContentDes">
              Web 2.0 or Web 3.0, we are laying the foundation for a new era of
              content-centric experience full of limitless possibilities. Fans
              and players are owners and creators, and they share the
              collaborative ownership of a vibrant decentralized future.
            </div>
          </div>
          <div class="homeVision" id="OurVisions">
            <div class="homeVisionHd">Our Visions</div>
            <div class="homeVisionCont">
              <div class="columns is-mobile">
                <div class="column">
                  <div class="homeVisionWrap">
                    <div class="homeVisionTitle">
                      Peer-to-peer On-chain Licensing
                    </div>
                    <div class="homeVisionDes">
                      Obtain and request authorized licenses on our platform and
                      easily trace your approved derivative projects.
                    </div>
                    <div class="homeVisionImg">
                      <img src="/img/1.png" />
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="homeVisionWrap">
                    <div class="homeVisionTitle">
                      Utilities and Earnings beyond Trading
                    </div>
                    <div class="homeVisionDes">
                      Earn rewards and royalties by making your NFT "usable",
                      set up social engagements and roll with your community.
                    </div>
                    <div class="homeVisionImg">
                      <img src="/img/2.png" />
                    </div>
                  </div>
                </div>
                <div class="column">
                  <div class="homeVisionWrap">
                    <div class="homeVisionTitle">
                      Built with the Power of Decentralization
                    </div>
                    <div class="homeVisionDes">
                      With multi-chain support, we empower ecosystem-agnostic
                      participations centered around your beloved NFT and its
                      fandom.
                    </div>
                    <div class="homeVisionImg">
                      <img src="/img/3.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section02">
        <div class="container" id="Holders">
          <div class="homeHolders">
            <div class="homeHoldersHd">
              <p>for</p>
              <h3>Holders</h3>
            </div>
            <div class="homeHoldersList">
              <div
                class="homeHoldersListInner wow fadeInUp"
                v-for="(item, index) in holdersList"
                :key="index"
                data-wow-duration="3s"
              >
                <div class="num">0{{ index + 1 }} ///</div>
                <div class="title">
                  <span>{{ item.title }}</span>
                </div>
                <div class="des">
                  {{ item.des }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="homeTop homeTop02 section02Scoll">
          <p>
            <span> Welcome onboard to the owner-centric future </span>
            <span> /// </span>
            <span> Welcome onboard to the owner-centric future </span>
            <span> /// </span>
            <span> Welcome onboard to the owner-centric future </span>
            <span> /// </span>
            <span> Welcome onboard to the owner-centric future </span>
            <span> /// </span>
            <span> Welcome onboard to the owner-centric future </span>
            <span> /// </span>
            <span> Welcome onboard to the owner-centric future </span>
            <span> /// </span>
            <span> Welcome onboard to the owner-centric future </span>
          </p>
        </div>

        <div class="container" id="Fans">
          <div class="homeHolders homeFans">
            <div class="homeHoldersHd">
              <p>for</p>
              <h3>Fans</h3>
            </div>
            <div class="homeHoldersList">
              <div
                class="homeHoldersListInner wow fadeInUp"
                v-for="(item, index) in fanssList"
                :key="index"
                data-wow-duration="3s"
              >
                <div class="num">0{{ index + 1 }} ///</div>
                <div class="title">
                  <span>{{ item.title }}</span>
                </div>
                <div class="des">
                  {{ item.des }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section03">
        <div class="container">
          <div class="homeAbout">
            <div class="homeAboutHd">
              <img src="/img/Logo.png" />
            </div>
            <div class="homeAboutCont">
              We are a <span>collaborative ecosystem</span> <br />
              that <span>grants commercialization</span> &
              <span>expansion</span> of <br />
              <span>your beloved NFTs</span> via on-chain licensing
            </div>
          </div>
        </div>
      </section>
    </div>

    <section class="section04">
      <div class="container">
        <div class="homeSearch">
          <div class="homeSearchWrap">
            <div class="fr" @click="sendEmail()">KEEP ME UPDATED</div>
            <div class="inner">
              <input
                type="text"
                v-model="email"
                placeholder="Enter your email here..."
              />
              <!-- <b-input ></b-input> -->
            </div>
          </div>
          <div class="homeSearchTxt">Grab a Ticket to Join</div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Sigroll from "@/components/Sigroll.vue";
import { WOW } from "wowjs";
import { VueTypedJs } from 'vue-typed-js'
export default {
  name: "Home",
  components: {
    Sigroll,
    VueTypedJs
  },
  data() {
    return {
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
  },
  methods: {
    sendEmail() {
      var reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if(!reg.test(this.email)){
        this.$buefy.toast.open({
          message: 'Please enter a valid email!',
          type: 'is-danger'
      })
        return
      }
      this.$buefy.toast.open({
          message: 'Success!',
          type: 'is-success'
      })
    }
  }
};
</script>