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
        <v-list-item class="pa-2 d-flex flex-column">
          <v-list-item-avatar>
            <v-img
                :src="articleIcon"
                :lazy-src="articleIcon"
            ></v-img>
          </v-list-item-avatar>
          <span class="white--text nav-text">{{articleTitle}}</span>
        </v-list-item>

        <v-list-item class="pa-2 d-flex flex-column justify-center align-center" link to="/">
            <v-img
                :src="require('../assets/icons/off tangent/article/ios-home 1.png')"
                :lazy-src="require('../assets/icons/off tangent/article/ios-home 1.png')"
                height="35"
                width="35"
            ></v-img>
            <span class="white--text nav-text">Home</span>
        </v-list-item>

        <!-- links -->
        <v-list-item 
            class="pa-2 d-flex flex-column" 
            v-if="secOneTitle" 
            @click="goto(secOneSlug)"
            >            
            <v-img
                :src="secOneIcon"
                :lazy-src="secOneIcon"
                height="35"
                width="35"
            ></v-img>
            <span class="white--text nav-text">{{secOneTitle}}</span>
        </v-list-item>
        <v-list-item class="pa-2 d-flex flex-column" 
            v-if="secTwoTitle"
            @click="goto(secTwoSlug)">
            <v-img
                :src="secTwoIcon"
                :lazy-src="secTwoIcon"
                height="35"
                width="35"
            ></v-img>
            <span class="white--text nav-text">{{secTwoTitle}}</span>
        </v-list-item>
        <v-list-item class="pa-2 d-flex flex-column" 
            v-if="secThreeTitle"
            @click="goto(secThreeSlug)">
            <v-img
                :src="secThreeIcon"
                :lazy-src="secThreeIcon"
                height="35"
                width="35"
            ></v-img>
            <span class="white--text nav-text">{{secThreeTitle}}</span>
        </v-list-item>
        <!-- end links -->

        <v-list-item 
            class="pa-2 d-flex flex-column justify-center align-center"
            link
            :to="`/${prevArticleSlug}`"
            >
            <Arrow direction="left" color="#fff" width="40" height="40" />
            <span class="white--text nav-text">Previous article</span>
            <!-- <nuxt-link :to="`/${prevArticleSlug}`" class="nav-link"></nuxt-link> -->
        </v-list-item>

        <v-list-item 
            class="pa-2 d-flex flex-column justify-center align-center"
            link
            :to="`/${nextArticleSlug}`"
            >
            <Arrow direction="right" color="#fff" width="40" height="40"/>
            <span class="white--text nav-text">Next article</span>
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
          <Arrow direction="left" :color="themeColor" width="58" height="58" v-if="isDesktop" />
          <Arrow direction="left" :color="themeColor" width="30" height="30" v-else />
          <div class="d-flex justify-center align-start flex-column ml-2">
            <span :style="`color: ${themeColor}`">previous</span>
            <span>{{ prevArticle }}</span>
          </div>
        </nuxt-link>

        <nuxt-link
          :to="`/${nextArticleSlug}`"
          class="article-controls d-flex flex-row-reverse"
        >
          <Arrow direction="right" :color="themeColor" width="58" height="58" v-if="isDesktop" />
          <Arrow direction="right" :color="themeColor" width="30" height="30" v-else />
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
    "secOneIcon",
    "secTwoIcon",
    "secThreeIcon",
    "secOneTitle",
    "secTwoTitle",
    "secThreeTitle",
    "secOneSlug",
    "secTwoSlug",
    "secThreeSlug",
    "articleIcon"
  ],
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth;
        },
        goto(path) {
            let el = document.getElementById(path)
            let top = el.offsetTop;
            window.scrollTo({top:(0, top), behavior: 'smooth'});
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
        font-size: 2.5em;
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

        @media screen and (max-width: 768px) {
            font-size: .75em;
        }   
    }
  }
}

.no-nav {
    display: none !important;
}

.nav-link {
    text-decoration: none;
}

.nav-text {
    font-size: .8em;
    text-align:center;
    max-width: 70px;
    width: 100%;
    display: flex;
    justify-content: center;
}

.v-list-item {
    min-height: auto;
}

.row {
    margin: -4px;
}

.col {
    padding: 4px;
}
</style>