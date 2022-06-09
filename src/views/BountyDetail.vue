<template>
  <div class="container">
    <section>
      <div class="topDetail">
        <div class="imgBox">
          <img :src="topDetail.img" alt="" />
        </div>
        <div class="textBox">
          <div class="topNmae">{{ topDetail.name }}</div>
          <div class="topDescription">{{ topDetail.description }}</div>
          <div class="InitiatorBox">
            <div class="columns">
              <div class="column is-3">
                <div class="tit">Initiator</div>
                <div class="txt">
                  <div class="iconTit">
                    <img class="img1" :src="topDetail.InitiatorLogo" alt="" />
                    <span class="name">{{ topDetail.Initiator }}</span>
                    <img class="img2" src="/icon/Group.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="column is-7">
                <div class="tit">Period</div>
                <div class="txt">
                  {{ topDetail.Period }}
                  <span class="PeriodAddress"
                    >{{ topDetail.PeriodAddress }}
                  </span>
                </div>
              </div>
              <div class="column is-3">
                <div class="tit">Contract Address</div>
                <div class="txt">{{ topDetail.ContractAddress }}</div>
              </div>
            </div>
          </div>
          <div class="InitiatorBox">
            <div class="columns">
              <div class="column is-3">
                <div class="tit">Category</div>
                <div class="txt">{{ topDetail.Category }}</div>
              </div>
              <div class="column is-9">
                <div class="tit">Requesting</div>
                <div class="txt">
                  <div
                    v-for="(item, index) in topDetail.Requesting"
                    :key="index"
                  >
                    {{ index + 1 }}.{{ item.text }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="stepBox">
        <div class="content">
          <div class="columns">
            <div class="column is-6">
              <div class="imgBox">
                <img src="/icon/step1.png" alt="" />
              </div>
              <div class="titBox">
                <div class="tit">Step 1</div>
                <div class="txt">Select the NFT you want to Authorize</div>
              </div>
            </div>
            <div class="column is-4">
              <div class="imgBox">
                <img src="/icon/step2.png" alt="" />
              </div>
              <div class="titBox">
                <div class="tit">Step 2</div>
                <div class="txt">Sign the Agreements</div>
              </div>
            </div>
            <div class="column is-3">
              <div class="imgBox">
                <img src="/icon/step3.png" alt="" />
              </div>
              <div class="titBox">
                <div class="tit">Step 3</div>
                <div class="txt">Get Reward !!!!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="nftsBox">
        <div class="tit">Your Elegible NFTs</div>
        <div class="nft">
          <b-carousel-list
            v-model="nftValues"
            :data="nfts"
            :arrow="true"
            :arrow-hover="false"
            :items-to-show="4"
            :items-to-list="1"
            :repeat="true"
            :has-drag="drag"
            :has-grayscale="false"
            :has-opacity="false"
          />
        </div>
        <div class="changeBox">
          <div class="txt">
            You will be able to claim total <span>2 ETH</span>
          </div>
          <div class="btn">
            <b-button type="is-info">Authorize</b-button>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="CurrentBox">
        <div class="titBox">
          <div class="tit">Current Participators</div>
          <div class="size">
            Pool Size: <span>{{ poolSize }}</span>
          </div>
        </div>
        <div class="Current">
            <div v-for="(item, index) in currentList" :key="index" class="CurrentItem">
                <div class="tit">
                    <img class="img1" src="/icon/current.png" alt="" />
                    <span class="name">{{ item.title }}</span>
                </div>
                <div class="img">
                    <img :src="item.image" alt="">
                </div>
            </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 0,
      topDetail: {
        img: require("@/assets/sample-image/ape.png"),
        name: "TESLA x BAYC",
        description:
          "Description of Bounty Description of Bounty Description of Bounty Description of Bounty Description of Bounty Description of Bounty Description of Bounty Description of Bounty Description of Bounty Description of Bounty Description of Bounty Description of Bounty Description of Bounty Description of Bounty Description of Bounty Description of Bounty ",
        Initiator: "TESLA",
        InitiatorLogo: require("@/assets/sample-image/EllipseT.png"),
        Period: "2022.6.1 23:00 ~ 2022.6.6 23:00",
        PeriodAddress: "GMT+8:00",
        ContractAddress: "0x1871...aE95",
        Category: "NFT Collection",
        Requesting: [
          {
            text: "BAYC X 10 with description",
          },
          {
            text: "DoodlesX 10 with description",
          },
        ],
      },
      nftValues: 0,
      nfts: [
        {
          title: "Nft 1",
          image: require("@/assets/sample-image/ape1.png"),
        },
        {
          title: "Nft 2",
          image: require("@/assets/sample-image/ape2.png"),
        },
        {
          title: "Nft 3",
          image: require("@/assets/sample-image/ape3.png"),
        },
        {
          title: "Nft 4",
          image: require("@/assets/sample-image/apeDefault.png"),
        },
        {
          title: "Nft 5",
          image: require("@/assets/sample-image/apeDefault.png"),
        },
      ],
      poolSize: 302,
      currentList: [
        {
          title: "joychou",
          image: require("@/assets/sample-image/cList1.png"),
        },
        {
          title: "blabla.eth",
          image: require("@/assets/sample-image/cList2.png"),
        },
        {
          title: "0x1871...aE95",
          image: require("@/assets/sample-image/cListDefault.png"),
        },
        {
          title: "0x1871...aE95",
          image: require("@/assets/sample-image/cListDefault.png"),
        }
      ]
    };
  },
  mounted() {
    this.id = this.$route.params.id;
  },
  methods: {},
};
</script>

<style scoped>
.topDetail {
  width: 100%;
  height: 640px;
}
.topDetail .imgBox {
  float: left;
  width: 448px;
  height: 640px;
}
.topDetail.imgBox img {
  width: 448px;
  height: 640px;
}
.topDetail .textBox {
  float: left;
  width: calc(100% - 448px);
  height: 640px;
  padding: 80px 160px 0px 96px;
  box-sizing: border-box;
  color: #ffffff;
}
.topDetail .textBox .topNmae {
  height: 44px;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
}
.topDetail .textBox .topDescription {
  height: 88px;
  line-height: 22px;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 24px;
}
.topDetail .textBox .InitiatorBox {
  margin-top: 64px;
}
.topDetail .textBox .InitiatorBox .tit {
  height: 24px;
  line-height: 17px;
  align-items: center;
  color: rgba(255, 255, 255, 0.6);
}
.topDetail .textBox .InitiatorBox .txt {
  height: 20px;
  line-height: 20px;
  font-size: 16px;
}
.topDetail .textBox .InitiatorBox .txt .PeriodAddress {
  color: rgba(255, 255, 255, 0.6);
}
.topDetail .textBox .InitiatorBox .txt .iconTit {
  /* width: 125px; */
  height: 24px;
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
}
.topDetail .textBox .InitiatorBox .txt .iconTit .img1 {
  width: 24px;
  height: 24px;
  display: inline-block;
  vertical-align: middle;
}
.topDetail .textBox .InitiatorBox .txt .iconTit .name {
  margin: 0px 8px;
  display: inline-block;
  vertical-align: middle;
  font-size: 16px;
}
.topDetail .textBox .InitiatorBox .txt .iconTit .img2 {
  width: 18px;
  height: 20px;
  display: inline-block;
  vertical-align: middle;
}
.stepBox {
  width: 100%;
  height: 200px;
  background: #111111;
  padding: 72px 157px;
  box-sizing: border-box;
}
.stepBox .content {
  width: clac(100% - 314px);
  height: 56px;
  background: #111111;
}
.stepBox .content .imgBox {
  width: 56px;
  height: 56px;
  float: left;
}
.stepBox .content .titBox {
  height: 56px;
  line-height: 28px;
  margin-left: 15px;
  float: left;
  font-size: 20px;
}
.nftsBox {
  width: 100%;
  height: 762px;
  background: #000000;
  padding-top: 88px;
  box-sizing: border-box;
  clear: both;
}
.nftsBox .tit {
  margin: 0px 160px;
  height: 60px;
  font-weight: 700;
  font-size: 36px;
  height: 60px;
  align-items: center;
}
.nftsBox .nft {
  margin: 44px 90px 0px 90px;
  height: 300px;
}
.nftsBox .changeBox {
  width: 1020px;
  margin: 118px 160px 0px 160px;
  float: left;
}
.nftsBox .changeBox .txt {
  float: left;
  line-height: 45px;
  font-size: 24px;
}
.nftsBox .changeBox .txt span {
  font-size: 28px;
  color: #6af7ff;
}
.nftsBox .changeBox .btn {
  float: right;
}
.CurrentBox {
  width: 100%;
  height: 392px;
  background: #111111;
  padding: 64px 0px 0px 160px;
}
.CurrentBox .titBox {
  width: 1020px;
  height: 32px;
  float: left;
  line-height: 32px;
}
.CurrentBox .titBox .tit {
  font-weight: 600;
  font-size: 20px;
  float: left;
}
.CurrentBox .titBox .size {
  font-size: 20px;
  float: right;
  color: rgba(255, 255, 255, 0.5);
}
.CurrentBox .titBox .size span {
  color: #ffffff;
}
.CurrentBox .Current{
    width: 1180px;
    height: 222px;
    margin-top: 52px;
    /* overflow-x: scroll;
    overflow-y: hidden; */
}
.CurrentBox .Current .CurrentItem{
    width: 160px;
    height: 192px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 18px;
    float: left;
}
.CurrentBox .Current .CurrentItem:not(:first-child){
    margin-left: 20px;
}
.CurrentBox .Current .CurrentItem .tit{
    height: 24px;
    font-size: 16px;
    line-height: 24px;
    margin-left: 12px;
    padding-top: 12px;
    box-sizing: border-box;
}
.CurrentBox .Current .CurrentItem .tit .img1{
    width: 24px;
    height: 24px;
  display: inline-block;
  vertical-align: middle;
}
.CurrentBox .Current .CurrentItem .tit .name{
    margin: 0px 8px;
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
}
.CurrentBox .Current .CurrentItem .img{
    width: 136px;
    height: 136px;
    border-radius: 6px;
    margin: 20px auto;
}
.CurrentBox .Current .CurrentItem .img img{
    width: 136px;
    height: 136px;
}
</style>