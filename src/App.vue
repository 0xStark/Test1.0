<template>
  <div id="app">
    <Headers />
    <div  style="padding-top:80px;min-height:600px">
      <transition  name="my-layouts"
                mode="out-in"
                appear>
      <router-view/>
      </transition>
    </div>
    
    <Footers />
  </div>
</template>
<script>
import Headers from './components/Header.vue'
import Footers from './components/Footer.vue'

export default {
  components: {
    Headers,
    Footers
  }
}
</script>

