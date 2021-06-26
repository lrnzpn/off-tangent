<template>
  <div>
      <v-app-bar
        :fixed='!isDesktop'
        flat
        :class="[ isDesktop ? 'no-nav' : '']"
      >
          <v-toolbar-title>My files</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      </v-app-bar>

    <v-navigation-drawer 
        width="100" 
        app 
        :permanent="isDesktop"
        floating
        :color="sidebarColor"
        >
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img
              
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <div class="hero" :class="{'pt-16' : !isDesktop}">
      <v-img
        :src="articleBanner"
        width="100vw"
        :lazy-src="articleBanner"
      >
        <v-container class="h-100">
          <div class="h-100 d-flex justify-start align-center">
            <div>
              <h1>{{ articleTitle }}</h1>
              <h3>{{ articleAuthor }}</h3>
              <p>{{ articleShortDesc }}</p>
            </div>
          </div>
        </v-container>
      </v-img>
    </div>

    <v-container class="px-15">
        
      <slot><!-- article content goes here --></slot>

      <div class="d-flex justify-space-between align-center my-15">
        <nuxt-link
          :to="`/${prevArticleSlug}`"
          class="article-controls d-flex flex-row"
        >
          <Arrow direction="left" :color="themeColor" />
          <div class="d-flex justify-center align-start flex-column ml-2">
            <span :style="`color: ${themeColor}`">previous</span>
            <span>{{ prevArticle }}</span>
          </div>
        </nuxt-link>

        <nuxt-link
          :to="`/${nextArticleSlug}`"
          class="article-controls d-flex flex-row-reverse"
        >
          <Arrow direction="right" :color="themeColor" />
          <div class="d-flex justify-center align-end flex-column mr-2">
            <span :style="`color: ${themeColor}`">next</span>
            <span>{{ nextArticle }}</span>
          </div>
        </nuxt-link>
      </div>
    </v-container>

    <!-- <ParticipantsModal></ParticipantsModal> -->

    <Footer :color="footerColor"></Footer>
  </div>
</template>

<script>
import Arrow from "./Arrow";
import Footer from "./Footer";
import ParticipantsModal from "./ParticipantsModal";

export default {
    data() {
        return {
            windowWidth:0
        }
    },
  components: {
    Arrow,
    Footer,
    ParticipantsModal,
  },
  props: [
    "themeColor",
    "sidebarColor",
    "footerColor",
    "articleBanner",
    "articleTitle",
    "articleAuthor",
    "articleShortDesc",
    "prevArticle",
    "prevArticleSlug",
    "nextArticle",
    "nextArticleSlug",
  ],
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth;
        },
  },
  computed: {
      isDesktop() {
          return this.windowWidth > 768 ? true : false
      }
  },
  mounted() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();    
    },
    beforeDestroy () {
        window.removeEventListener('resize', this.handleResize);
    },
};
</script>

<style lang="scss" scoped>
.hero {
  h1 {
    font-family: $heading-font-bold;
    font-size: 4em;
    color: #FFFFFF;

    @media screen and (max-width: 991px) {
        font-size: 2.75em;
    }

    @media screen and (max-width: 768px) {
        font-size: 1.25em;
    }
  }

  h3 {
    font-family: $subheading-font;
    font-weight: 600;
    font-size: 1.5em;
    color: #FFFFFF;

    @media screen and (max-width: 768px) {
        font-size: .75em;
    }
  }

  p {
    font-family: $subheading-font;
    font-size: 1.25em;
    color: #FFFFFF;
    @media screen and (max-width: 768px) {
        font-size: .75em;
    }
  }
}

.article-controls {
  text-decoration: none;
  span {
    &:first-child {
      font-size: 0.75em;
      text-transform: uppercase;
      font-family: $subheading-font;
      font-weight: 600;
    }

    &:last-child {
      font-size: 1.13em;
      color: #000000;
      font-family: $body-font;
      font-weight: 700;
    }
  }
}

.no-nav {
    display: none !important;
}
</style>