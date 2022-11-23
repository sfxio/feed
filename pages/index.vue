<template>
  <div class="w-full">
    <!-- Hero section -->
    <section id="hero" class="w-full pb-24">
      <BaseSection>
        <div class="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 md:text-center sm:text-left">
          <div class="px-4 py-2 rounded-full bg-gradient-to-r from-[#468ef9] to-[#0c66ee] text-white inline-block">
            <span class="text-base font-semibold">Coming soon</span>
          </div>
          <h1 class="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10">
            Feed for<span class="text-header-gradient" style="padding-left: 0.2em;">TikTok</span>
            Shop
          </h1>
          <p class="paragraph hidden sm:block">
            Feed for TikTok Shop is designed to work with major eCommerce platforms and is certified to meet the
            industry’s most rigorous security and privacy standards.
          </p>
          <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2">
            <form class="flex w-full gap-1 h-12" @submit.prevent="handleSubmit">
              <input
                v-model="email"
                required="true"
                name="email"
                type="email"
                class="w-full px-2 rounded-lg sm:rounded-md text-sm focus:outline-none border border-[#AAAAAA] placeholder-[#888]"
                placeholder="Enter your email"
              />
              <BaseButton
                class="max-w-full px-8 bg-gradient-to-r from-[#468ef9] to-[#0c66ee] border border-[#0c66ee] text-white rounded-md"
                type="submit"
              >
                <template v-if="isLoading">
                  Loading...
                </template>
                <template v-else>
                  Subscribe
                </template>
              </BaseButton>
            </form>
            <!-- <BaseButton
              class="max-w-full px-6 py-4 bg-inherit text-gradient border border-[#0c66ee] flex items-center justify-center"
            >
              <span>Download App</span>
              <ChevronDownIcon :size="20" class="mt-1 text-[#0c66ee]" />
            </BaseButton> -->
          </div>
        </div>
        <div class="hidden sm:block col-span-12 lg:col-span-6">
          <div class="w-full">
            <img src="/banner.png" class="-mt-4 rounded-lg" alt="" />
          </div>
        </div>
        <img
          :src="require('~/assets/img/pattern/ellipse-1.png')"
          class="hidden sm:block absolute bottom-12 xl:bottom-16 left-4 xl:left-0 w-6"
        />
        <img
          :src="require('~/assets/img/pattern/ellipse-2.png')"
          class="hidden sm:block absolute top-4 sm:top-10 right-64 sm:right-96 xl:right-[32rem] w-6"
        />
        <img
          :src="require('~/assets/img/pattern/ellipse-3.png')"
          class="hidden sm:block absolute bottom-56 right-24 w-6"
        />
        <img
          :src="require('~/assets/img/pattern/star.png')"
          class="hidden sm:block absolute top-24 sm:top-20 right-16 lg:right-0 lg:left-[30rem] w-8"
        />
      </BaseSection>
    </section>

    <!-- Crypto statistic section -->
    <section
      class="max-w-screen-xl mx-2 sm:mx-auto px-4 sm:px-6 lg:px-0 py-6 pb-20 sm:py-8 rounded-[2.25rem] sm:rounded-xl bg-white shadow-lg sm:shadow-md transform lg:-translate-y-12"
    >
      <div class="w-full flex flex-col lg:flex-row items-center justify-center">
        <LandingCryptoStatistic title="🔥 Trending" :datasets="trendings" class="xl:border-r border-gray-200 lg:px-8" />
        <LandingCryptoStatistic
          data-aos="fade-up"
          data-aos-delay="150"
          title="🚀 Top"
          :datasets="topGainers"
          class="xl:border-r border-gray-200 lg:px-8"
        />
        <LandingCryptoStatistic
          data-aos="fade-up"
          data-aos-delay="300"
          title="💎 Recently"
          :datasets="recents"
          class="lg:px-8"
        />
      </div>
    </section>

    <!-- Buy and trade section -->
    <!-- <section class="w-full my-24">
      <BaseSection>
        <LandingBuyTradeImage class="sm:hidden mb-8" />
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6 mt-4 xl:mt-20 space-y-6 px-4">
          <h2 class="text-4xl font-semibold sm:pr-8 xl:pr-12">
            Buy & trade on the <br class="hidden sm:block" />
            original crypto exchange.
          </h2>
          <p class="paragraph">
            Buy now and get 40% extra bonus Minimum pre-sale amount 25 Crypto Coin. We accept BTC crypto-currency
          </p>
          <div class="space-y-6 lg:pr-12">
            <LandingExchange
              title="Amount"
              name="amount"
              type="number"
              default-value="5.000"
              :exchange-selected="currencySelected"
              :exchanges="currencies"
            />
            <LandingExchange
              title="Get"
              name="get"
              type="number"
              default-value="0.10901"
              :exchange-selected="cryptoSelected"
              :exchanges="cryptocurrencies"
            />
            <BaseButton class="w-full px-5 py-4 bg-blue-gradient text-white text-base font-medium">Buy Now</BaseButton>
          </div>
        </div>
        <LandingBuyTradeImage data-aos="fade-left" class="hidden sm:block" />
      </BaseSection>
    </section> -->

    <!-- Partners section -->
    <!-- <section class="bg-partner relative max-w-full sm:mx-6 my-24 shadow sm:rounded-2xl overflow-hidden">
      <div class="w-full px-6 sm:px-0 py-16 flex flex-col items-center justify-center space-y-4 text-center">
        <h3 data-aos="flip-down" class="text-2xl text-neutral-800 font-semibold">Trusted Partners Worldwide</h3>
        <p data-aos="flip-down" class="paragraph">We're partners with countless major organisations around the globe</p>
        <div data-aos="fade-up" class="flex flex-wrap items-center justify-center">
          <LandingPartnerImage
            v-for="img in ['clever.png', 'diamon-cutts.png', 'swiss-finance.png', 'gambio.png']"
            :key="img"
            :img="img"
          />
        </div>
      </div>
    </section> -->

    <!-- Credit card section -->
    <!-- <section class="w-full my-36 lg:pt-8">
      <BaseSection data-aos="fade-down">
        <div class="col-span-12 lg:col-span-7">
          <div class="w-full">
            <img :src="require('~/assets/img/nefa-cc.webp')" class="w-[95%]" alt="" />
          </div>
        </div>
        <div class="col-span-12 lg:col-span-5 space-y-6 px-4 sm:px-6 mt-20">
          <h2 class="text-4xl font-semibold">
            Introducing the <span class="text-header-gradient">NEFA</span> Credit Card
          </h2>
          <p class="paragraph">Subject to cardholder and rewards terms which will be available at application.</p>
          <ul class="space-y-4 sm:space-y-2">
            <LandingListItem title="Up to 3% back on purchases" />
            <LandingListItem title="Earn rewards in bitcoin or any crypto on NEFA" />
            <LandingListItem title="No annual fee" />
          </ul>
          <BaseButton
            class="w-full sm:max-w-[240px] px-10 py-4 bg-inherit text-gradient border border-[#0c66ee] text-base"
            >Join the waitlist</BaseButton
          >
        </div>
      </BaseSection>
    </section> -->

    <!-- Advanced trading tools section -->
    <section
      class="bg-trading-tools relative max-w-full sm:mx-4 mb-12 mt-10 lg:mt-20 py-16 shadow rounded-2xl overflow-hidden"
    >
      <div class="relative max-w-screen-xl px-4 sm:px-2 mx-auto grid grid-cols-12 gap-x-6">
        <LandingTradingToolImage class="sm:hidden" />
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-8">
          <!-- <h2 class="text-4xl font-semibold">Advanced Trading <span class="text-header-gradient">Tools</span></h2> -->
          <h2 class="text-4xl font-semibold">Features</h2>
          <div class="space-y-2">
            <h4 class="text-lg font-medium">1-click automatic inventory synchronization</h4>
            <p class="paragraph text-sm xl:text-base">
              Feed for TikTok Shop works smarter, not harder. Make changes to your product details and pricing in your
              eCommerce store and see the updates reflected on TikTok Shop immediately.
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-medium">Accuracy across all channels</h4>
            <p class="paragraph text-sm xl:text-base">
              Maximize feed optimization with error-free product and pricing information across Shopify online store,
              mobile app, and TikTok Shop.
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="text-lg font-medium">Show only products you want</h4>
            <p class="paragraph text-sm xl:text-base">
              Choose only the products and collections that you want to feature. Use our robust API and 24/7 customer
              support to fix any issues quickly.
            </p>
          </div>
          <!-- <div class="flex flex-col sm:flex-row">
            <BaseButton class="px-10 py-4 bg-inherit text-gradient border border-[#4A8FF6] text-base">
              Get Started
            </BaseButton>
            <BaseButton class="bg-inherit text-[#4A8FF6] px-10 py-4 text-center underline rounded-full">
              Learn More
            </BaseButton>
          </div> -->
        </div>
        <LandingTradingToolImage data-aos="fade-left" class="hidden sm:block" />
      </div>
    </section>

    <!-- Industry-leading security section -->
    <!-- <section class="w-full my-24">
      <div class="relative max-w-screen-xl px-8 mx-auto grid grid-cols-12 gap-x-6">
        <div data-aos="fade-right" class="col-span-12 lg:col-span-6">
          <div class="w-full">
            <img :src="require('~/assets/img/industry-leading-security.webp')" class="w-full" alt="" />
          </div>
        </div>
        <div data-aos="fade-left" class="col-span-12 lg:col-span-5 space-y-8 sm:space-y-6 mt-8 xl:px-8">
          <h2 class="text-4xl font-semibold">Industry-leading security from day one</h2>
          <ul class="space-y-8 sm:space-y-4">
            <LandingListItem title="Safety, security and compliance">
              <p class="text-sm text-gray-700 leading-relaxed">
                NEFA is a licensed New York trust company that undergoes regular bank exams and is subject to the
                cybersecurity audits conducted by the New York Department of Financial Services.
                <span class="underline">Learn more</span> about our commitment to security.
              </p>
            </LandingListItem>
            <LandingListItem title="Hardware security keys">
              <p class="text-sm text-gray-700 leading-relaxed">
                With NEFA you can secure your account with a hardware security key via WebAuthn.
              </p>
            </LandingListItem>
            <LandingListItem title="SOC Certifications">
              <p class="text-sm text-gray-700 leading-relaxed">
                NEFA is <span class="underline">SOC 1 Type 2</span> and
                <span class="underline">SOC 2 Type 2</span> compliant. We are the world’s first cryptocurrency exchange
                and custodian to complete these exams.
              </p>
            </LandingListItem>
          </ul>
        </div>
      </div>
    </section> -->

    <!-- Getting started section -->

    <section class="relative max-w-full mb-24 shadow sm:rounded-2xl overflow-hidden">
      <div class="w-full py-16 flex flex-col items-center sm:px-4 xl:px-10">
        <h2 data-aos="flip-down" class="text-3xl sm:text-4xl font-semibold text-center">
          Get started in just a few minutes
        </h2>
        <div
          data-aos="fade-up"
          class="relative w-full flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 px-4 xl:px-10 mt-16 sm:mt-8"
        >
          <LandingStep v-for="step in steps" :key="step.title" :step="step" />
          <img
            :src="require('~/assets/img/getting-started/arrow.png')"
            class="hidden lg:inline-block absolute top-32 left-64 xl:left-[22rem] w-24 xl:w-[9.5rem]"
            alt=""
          />
          <img
            :src="require('~/assets/img/getting-started/arrow.png')"
            class="hidden lg:inline-block absolute top-32 right-64 xl:right-[22rem] w-24 xl:w-[9.5rem]"
            alt=""
          />
        </div>
      </div>
    </section>

    <!-- FAQ section -->
    <section class="w-full my-24">
      <BaseSection>
        <div data-aos="fade-right" data-aos-delay="150" class="col-span-12 lg:col-span-6">
          <div class="w-full">
            <img src="/faq.png" class="w-full rounded-md" alt="FAQ" style="max-width: 420px;" />
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="150" class="col-span-12 lg:col-span-6 px-4 sm:px-6 mt-8">
          <span class="text-base text-gradient font-semibold uppercase mb-4 sm:mb-2">Support</span>
          <h2 class="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6">Frequently asked questions</h2>

          <ul class="shadow-box">
            <BaseAccordion v-for="(accordion, index) in accordions" :key="index" :accordion="accordion" />
          </ul>
        </div>
      </BaseSection>
    </section>

    <!-- <div class="w-full my-10 flex justify-center">
      <a
        v-smooth-scroll
        data-aos="flip-down"
        data-aos-delay="150"
        href="#navbar"
        class="px-6 py-3 flex items-center space-x-2 bg-[#FAFAFA] hover:bg-gray-100 hover:shadow-md border border-[#DDDDDD] rounded-md text-gray-700"
      >
        <span>Back to top</span>
        <ArrowUpIcon :size="20" />
      </a>
    </div> -->
  </div>
</template>

<script>
import aosMixin from '@/mixins/aos'
import { submit } from '@/api'

export default {
  name: 'IndexPage',
  mixins: [aosMixin],
  data() {
    return {
      isLoading: false,
      email: '',
      selected: 0,
      dropdownConcurency: false,
      dropdownCrypto: false,
      currencySelected: {
        img: 'country-icon/eng.png',
        name: 'USD',
      },
      currencies: [
        {
          img: 'country-icon/eng.png',
          name: 'USD',
        },
      ],
      cryptoSelected: {
        img: 'crypto-icon/bitcoin.png',
        name: 'BTC',
      },
      cryptocurrencies: [
        {
          img: 'crypto-icon/bitcoin.png',
          name: 'BTC',
        },
      ],
      trendings: [
        {
          id: 1,
          name: 'Graph-Ink Liquid Eyeliner Bundle',
          stock: '19,000',
          price: '$9.99',
          logo: 'product1.webp',
          increase: true,
          data: [40, 35, 60, 75, 60, 75, 50],
        },
        {
          id: 2,
          name: 'Clear Whey Isolate Protein Powder - Myprotein',
          stock: 597,
          price: '$5.99',
          logo: 'product2.webp',
          increase: true,
          data: [25, 30, 60, 50, 80, 55, 80],
        },
        {
          id: 3,
          name: 'Made By Mitchell Pencil/Liner Case',
          stock: '7,980',
          price: '$29.99',
          logo: 'product3.webp',
          increase: true,
          data: [40, 45, 40, 80, 50, 60, 35],
        },
        {
          id: 4,
          name: 'By BEAUTY BAY Bright 42 Colour Palette',
          stock: '12,002',
          price: '$12.99',
          logo: 'product4.webp',
          increase: true,
          data: [35, 70, 60, 80, 50, 60, 40],
        },
      ],
      topGainers: [
        {
          id: 1,
          name:
            'DIHOclub Cow Ceramic Cup Hidden 3D Animal Inside Mug,Cute Cartoon Handmade Figurine Mugs,Holiday and Birthday Gift for Coffee Milk Tea Lovers,12 OZ',
          stock: '43,180',
          price: '$99.99',
          logo: 'product5.webp',
          increase: true,
          data: [40, 35, 60, 75, 60, 75, 50],
        },
        {
          id: 2,
          name: '[Curlady] Shaping Low Back Bodysuit',
          stock: '3,480',
          price: '$39.99',
          logo: 'product6.webp',
          increase: true,
          data: [25, 30, 60, 50, 80, 55, 80],
        },
        {
          id: 3,
          name: 'Go.G.G Super-stretch long sleeve Jumpsuit',
          stock: 150,
          price: '$49.99',
          logo: 'product7.webp',
          increase: true,
          data: [40, 45, 40, 80, 50, 60, 35],
        },
        {
          id: 4,
          name: 'Luxury Jewellery Advent Calendar with Crystals from Swarovski',
          stock: '1,572',
          price: '$19.99',
          logo: 'product8.webp',
          increase: true,
          data: [35, 70, 60, 80, 50, 60, 40],
        },
      ],
      recents: [
        {
          id: 1,
          name: "2 for $10 Pick'n'Mix Sweets Bags (2 x 1kg)",
          stock: '3,180',
          price: '$10.00',
          logo: 'product9.webp',
          increase: true,
          data: [40, 35, 60, 75, 60, 75, 50],
        },
        {
          id: 2,
          name: 'Garnier Skin Active Micellar Water Facial Cleanser for Sensitive Skin 700ml',
          stock: '8,280',
          price: '$39.99',
          logo: 'product10.webp',
          increase: true,
          data: [25, 30, 60, 50, 80, 55, 80],
        },
        {
          id: 3,
          name: 'The Christmas Outfit',
          stock: 250,
          price: '$9.99',
          logo: 'product11.webp',
          increase: true,
          data: [40, 45, 40, 80, 50, 60, 35],
        },
        {
          id: 4,
          name:
            'Fabric Shaver, Portable Rechargeable Ball Remover, Clothes Shaver, Electric Hair Ball Trimmer, Portable Sweater Shaver,USB Rechargeable Fluff Remover Bobble Remover for Clothes Fabric',
          stock: '2,572',
          price: '$24.99',
          logo: 'product12.webp',
          increase: true,
          data: [35, 70, 60, 80, 50, 60, 40],
        },
      ],
      accordions: [
        {
          title: 'What product fields will be automatically updated after syncing my products?',
          description: `<p>When you sync a product to your TikTok Shop, all related product fields (e.g. product titles, images, description) get copied to the TikTok Shop.</p>
            <p>Since we currently support a simple format for product descriptions, therefore we only copy plain text, images, and bullet points. However, rich formats like table, an ordered list, etc. get lost on TikTok Shop. Thus, we suggest checking the product description after your products are synced to the TikTok Shop and making the required modifications.</p>
            `,
        },
        {
          title: 'What image formats should I use when syncing my products?',
          description: `<p>TikTok Shop permits certain image formats to be used in product fields. To let you have a great experience, our app supports all the formats mandated by TikTok Shop and also converts your image files into suitable formats.</p>
            <p>Your images will be uploaded to TikTok Shop directly if you have them in any of these formats: JPG, JPEG, and PNG.</p>
            `,
        },
        {
          title: 'How should I specify the size of my products for hassle-free shipping package management?',
          description: `<p>TikTok Shop requires you to specify the size and weight information for certain types of products. However, this is not required on platforms like BigCommerce, WooCommerce, and Shopify. To sync products successfully on TikTok Shop, we set the following values by default to provide the size information.</p>`,
        },
      ],
      steps: [
        {
          img: 'set-up.svg',
          title: 'Setup',
          description: "Set your eCommerce platform stores', and TikTok Shop stores’ currency only in Pound Sterling",
        },
        {
          style: { paddingTop: '40px' },
          img: 'mapping.svg',
          title: 'Create category mapping',
          description:
            "The first thing is to sync your products from your eCommerce platform stores with the Feed for TikTok Shop. Here's how to do it:",
        },
        {
          style: { paddingTop: '52px' },
          img: 'sync.svg',
          title: 'Do Product syncing',
          description:
            'Once the category mapping is done for all your products, you can sync them to your TikTok Shop. Please note that they will be treated as new product listings after the syncing.',
        },
      ],
    }
  },
  methods: {
    async handleSubmit() {
      this.isLoading = true
      try {
        await submit({
          email: this.email,
        })
      } finally {
        this.isLoading = false
      }
    },
  },
}
</script>
<style scoped>
.text-header-gradient {
  background: rgb(57, 132, 244);
  background: linear-gradient(169.4deg, #3984f4 -6.01%, #0cd3ff 36.87%, #2f7cf0 78.04%, #0e65e8 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bg-partner {
  background: url('../assets/img/partner/background.png');
  background-size: cover;
  background-position: center;
}
.bg-trading-tools {
  background: url('../assets/img/bg-trading-tools.webp');
  background-size: cover;
  background-position: center;
}
.max-h-0 {
  max-height: 0;
}
</style>
