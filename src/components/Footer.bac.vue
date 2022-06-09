<template>
  <div class="content footer">
    <div style="border-top: solid 1px #CCCCCC">
      <div class="container">
        <div class="columns is-gapless" style="padding: 3rem 1.5rem">
          <div class="column is-8 has-text-left">
            <img
              src="/img/Logo_set2.svg"
              style="height: 50px; margin-bottom: 20px"
            />
            
          </div>
          <div class="columns column is-4 is-narrow has-text-left">
            <div class="column is-5">
              <dl>
                <dd>
                  <span class="tittle">{{$t("THE PRODUCT")}}</span>
                </dd>
                <dd>
                  <!-- <router-link to="/" class="is-capitalized">→ {{$t("For Holder")}}</router-link> -->
                  <a href="javascript:void(0)" @click="goAnchor('Holders')" class="is-capitalized">→ {{$t('For Holder')}}</a>
                </dd>
                <dd>
                  <!-- <router-link to="/" class="is-capitalized">→ {{$t("For Fan")}}</router-link> -->
                  <a href="javascript:void(0)" @click="goAnchor('Fans')" class="is-capitalized">→ {{$t('For Fan')}}</a>
                </dd>
              </dl>
            </div>
            <div class="column is-7 has-text-left" >
              <dl>
                <dd>
                  <span class="tittle">{{$t("About Us")}}</span>
                </dd>
                <dd>
                  <!-- <router-link to="javascript:void(0)" @click="goAnchor('OurVisions')" class="is-capitalized">→ {{$t('Our Visions')}}</router-link> -->
                  <a href="javascript:void(0)" @click="goAnchor('OurVisions')" class="is-capitalized">→ {{$t('Our Visions')}}</a>
                </dd>
                <dd>
                  <router-link to="/" class="is-capitalized">→ {{$t('Document')}}</router-link>
                </dd>
                <dd>
                  <router-link to="/" class="is-capitalized">→ {{$t('Terms & Conditions')}}</router-link>
                </dd>
                <dd>
                  <router-link to="/" class="is-capitalized">→ {{$t('Privacy Policy')}}</router-link>
                </dd>
              </dl>
            </div>
            <div class="column is-3  has-text-left">
              <dl>
                <dd>
                  <span class="tittle">{{$t("CONTACT")}}</span>
                </dd>
                <dd><router-link to="/">→ {{$t('Twitter')}}</router-link></dd>
                <dd><router-link to="/">→ {{$t('Discord')}}</router-link></dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="section" style="border-top: solid 1px #CCCCCC;padding-top: 30px">
          <div class="is-size-6 has-text-grey">
              Copyright © 2022 Sigroll LLC. All rights reserved.
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
  methods: {
    goAnchor(id) {
      var anchor = document.getElementById(id);
      document.documentElement.scrollTop = anchor.offsetTop + 1000;
    }
  }
};
</script>