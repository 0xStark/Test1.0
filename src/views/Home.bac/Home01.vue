<template>
  <div class="home">
    <div class="container">
      <section class="hero is-medium">
        <div class="hero-body">
          
            <div class="columns">
              <div class="column">
                <p class="title">
                  <img src="/img/welcome-title.svg">
                </p>
                <p class="subtitle has-text-white mt-3 mb-6 is-size-5">
                  A collaborative ecosystem that grants <br>commercialization and expansion of your beloved<br> NFTs via on-chain licensing
                </p>
                <a class="button is-primary mt-7" style="background-color:#3E30E5;padding: 24px 30px;border-radius: 0px;font-weight: 700">Explore Bounties</a>
              </div>
              <div class="column">&nbsp;</div>
            </div>
          
        </div>
      </section>
      
    </div>
    <section class="section">
      <div class="container">
        <img v-if="false" src="/img/visions.png">
        <div class="title is-size-2 p-6 m-6 has-text-centered has-text-white has-text-weight-bold">Our Visions</div>
        <div class="columns">
          <div class="column has-text-centered">
            <article>
              <figure class="p-3">
                <img src="/img/visions_1.png">
              </figure>
              <h2 class="subtitle has-text-white p-3 has-text-weight-bold">
                Authentication
              </h2>
              <p>
                Obtain authorized licensing of your NFT
              </p>
            </article>
          </div>
          <div class="column has-text-centered">
            <article>
              <figure class="p-3">
                <img src="/img/visions_2.png">
              </figure>
              <h2 class="subtitle has-text-white has-text-weight-bold">
                Earning
              </h2>
              <p>
                Earn rewards and royalties by making your NFT "usable"
              </p>
            </article>
          </div>
          <div class="column has-text-centered">
            <article>
              <figure class="p-3">
                <img src="/img/visions_3.png">
              </figure>
              <h2 class="subtitle has-text-white  has-text-weight-bold">
                Interoperability
              </h2>
              <p>
                Borderless content creations across ecosystems
              </p>
            </article>
          </div>
        </div>
      </div>
    </section><br><br>
    <section class="section mb-6 mt-6">
      <div class="container">
        <div class="title is-size-2 has-text-centered pb-6 mb-6 has-text-white has-text-weight-bold">How to use Sigroll?</div>
        <div class="columns mt-6">
          <div class="column has-text-centered ">
            <div style="height:390px" class="card has-text-white pb-6 pt-6 px-5 has-background-grey-1 has-text-weight-bold">
              <article class="">
                <h2 class="subtitle has-text-white has-text-weight-bold is-size-3">
                  Youtuebe Video Name
                </h2>
                <iframe height="200px" width="100%" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                  </iframe> 
                <div href="javascirpt:" class="has-text-primary has-text-right">see more</div>
              </article>
            </div>
          </div>
          <div class="column has-text-centered ">
            <div style="height:390px" class="card has-text-white pb-6 pt-6 px-5 has-background-grey-1 has-text-weight-bold">
              <article>
                <h2 class="subtitle has-text-white has-text-weight-bold is-size-3">
                  Medium Title Hear 
                </h2>
                <p>
                  Text blabla Text blabla Text blabla Text blabla Text blabla Text blabla 
                </p>
              </article>
            </div>
          </div>
          <div class="column has-text-centered ">
            <div style="height:390px" class="card has-text-white pb-6 pt-6 px-5 has-background-grey-1 has-text-weight-bold">
              <article>
                <h2 class="subtitle has-text-white has-text-weight-bold is-size-3">
                  Medium Title Hear 
                </h2>
                <p>
                  Text blabla Text blabla Text blabla Text blabla Text blabla Text blabla 
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="subscribe">
      <div class="container" style="height: 100%;padding: 1.5rem">
        <div class="columns is-gapless is-vcentered" style="height: 100%;">
          <div class="column is-8 ">
            Enter your email here ...
          </div>
          <div class="column is-4 is-size-3 has-text-right">
            Subscribe
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>
