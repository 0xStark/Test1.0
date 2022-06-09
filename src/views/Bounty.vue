<template>
  <div class="container">
    <section>
      <img src="/img/bounty_banner.png" alt="" />
    </section>
    <section>
      <nav class="navBox">
        <!-- <div class="navBoxBrand">
          <a class="navBoxItem">Bounties</a>
        </div> -->
        <div class="navbar-menu">
          <div class="navbar-end">
            <span>Sort by:&nbsp;&nbsp;</span>
            <b-dropdown v-model="TrendingType" aria-role="list">
              <template #trigger>
                <a class="navBoxItem" role="button">
                  <span v-if="TrendingType === 'Trending'">Trending</span>
                  <span v-if="TrendingType === 'Newest'">Newest</span>
                  <b-icon icon="menu-down" type="is-white"></b-icon>
                </a>
              </template>
              <b-dropdown-item aria-role="listitem" value="Trending"
                >Trending</b-dropdown-item
              >
              <b-dropdown-item aria-role="listitem" value="Newest"
                >Newest</b-dropdown-item
              >
            </b-dropdown>
          </div>
        </div>
      </nav>
    </section>
    <section>
      <div class="columns columnsOut">
        <div class="column is-3">
          <b-field>
            <b-input
              custom-class="SearchInput"
              placeholder="Search"
              type="search"
              icon-right="magnify"
            ></b-input>
          </b-field>
          <div class="checkBoxGroup">
            <b-field>
              <b-checkbox>Show Available</b-checkbox>
            </b-field>
            <b-field>
              <b-checkbox>Live</b-checkbox>
            </b-field>
            <b-field>
              <b-checkbox>UpComing</b-checkbox>
            </b-field>
          </div>
          <div class="CategoryBox">
            <b-menu>
              <b-menu-list label="Category">
                <b-menu-item label="BAYC"></b-menu-item>
                <b-menu-item label="Moonbird"></b-menu-item>
              </b-menu-list>
            </b-menu>
          </div>
        </div>
        <div class="column is-9">
          <div class="columns is-multiline is-mobile">
            <div v-for="(item, index) in list" :key="index" class="column is-4" @click="gotoDetail(item.id)">
              <div class="listBox">
                <div class="iconTit">
                  <img class="img1" src="/icon/Ellipse.png" alt="" />
                  <span>{{ item.name }}</span>
                  <img class="img2" src="/icon/Group.png" alt="" />
                </div>
                <div class="listImgBox">
                  <img :src="item.img ? item.img : defaultImg" alt="" />
                </div>
                <div class="listText">
                  {{ item.description }}
                </div>
                <div class="listButtonBox">
                  <b-button size="is-small" type="is-info">BAYC</b-button>
                  <b-button size="is-small" type="is-info" style="margin-left: 8px;">Fasion</b-button>
                </div>
              </div>
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
      TrendingType: "Trending",
      CategoryType: "",
      defaultImg: require('@/assets/sample-image/RectangleDefault.png'),
      list: [{
        name: 'GUCCI',
        img: require('@/assets/sample-image/Rectangle1.png'),
        description: 'GUCCI x BAYC',
        id: '1'
      },{
        name: 'GUCCI',
        img: require('@/assets/sample-image/Rectangle2.png'),
        description: 'GUCCI x BAYC double line tittle tittle tittle tittle...',
        id: '2'
      },{
        name: 'GUCCI',
        img: require('@/assets/sample-image/Rectangle3.png'),
        description: 'GUCCI x BAYC double line tittle',
        id: '3'
      },{
        name: 'GUCCI',
        img: '',
        description: 'GUCCI x BAYC double line tittle',
        id: '4'
      }]
    };
  },
  methods: {
    gotoDetail(id) {
      this.$router.push({ path: `bountydetail/${id}` })
    }
  }
};
</script>

<style scoped>
.navBox {
  border-bottom: 0.5px solid #ffffff;
}
.navBoxBrand {
  width: 74px;
  color: #ffffff;
  border-bottom: 4px solid #ffffff;
  clear: both;
  float: left;
}
.navBoxItem {
  color: #ffffff;
}
.columnsOut {
  padding: 64px 0px 128px 0px;
  box-sizing: border-box;
}
.checkBoxGroup {
  margin-top: 44px;
}
.CategoryBox {
  margin-top: 65px;
}
.listBox {
  margin: 0 auto;
  width: 256px;
  height: 360px;
  background: #111111;
  border-radius: 30px;
  cursor: pointer;
  padding: 24px 0px 36px 00px;
}
.iconTit {
  /* width: 125px; */
  height: 30px;
  margin: 0px 0px 0px 30px;
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
}
.iconTit .img1 {
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: middle;
}
.iconTit span {
  margin: 0px 8px;
  display: inline-block;
  vertical-align: middle;
}
.iconTit .img2 {
  width: 18px;
  height: 20px;
  display: inline-block;
  vertical-align: middle;
}
.listImgBox {
  margin-top: 20px;
}
.listImgBox img {
  width: 256px;
  height: 144px;
}
.listText {
  width: 208px;
  height: 48px;
  margin: 20px auto 0 auto;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
}
.listButtonBox{
  text-align: center;
  margin-top: 16px;
}
</style>

<style>
.SearchInput {
  background: #111111 !important;
  border-radius: 10px !important;
  border: none !important;
  color: rgba(255, 255, 255, 0.5) !important;
}
.SearchInput::placeholder {
  color: rgba(255, 255, 255, 0.5) !important;
}
.menu-label {
  color: #ffffff;
}
</style>