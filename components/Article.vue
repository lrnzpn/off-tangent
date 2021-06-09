<template>
  <div>
    <v-navigation-drawer permanent width="120" app>
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img
              src="https://randomuser.me/api/portraits/women/85.jpg"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <div class="hero">
      <v-img
        src="https://via.placeholder.com/720x480"
        width="100vw"
        height="500px"
        lazy-src="https://via.placeholder.com/720x480"
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

    <!-- article content goes here -->

    <QuoteBlock
      :color="themeColor"
      content="I’m proud of [earning]. It’s a different feeling when you can contribute
      to help your family."
    ></QuoteBlock>

    <v-container>
      <slot></slot>

      <div class="d-flex justify-space-between align-center">
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

    <Footer :color="themeColor"></Footer>
  </div>
</template>

<script>
import Arrow from "./Arrow";
import Footer from "./Footer";
import QuoteBlock from "./QuoteBlock";

export default {
  components: {
    Arrow,
    Footer,
    QuoteBlock,
  },
  props: [
    "themeColor",
    "articleTitle",
    "articleAuthor",
    "articleShortDesc",
    "prevArticle",
    "prevArticleSlug",
    "nextArticle",
    "nextArticleSlug",
  ],
};
</script>

<style lang="scss" scoped>
.hero {
  h1 {
    font-family: $heading-font-bold;
    font-size: 4em;
  }

  h3 {
    font-family: $subheading-font;
    font-weight: 600;
    font-size: 1.5em;
  }

  p {
    font-family: $subheading-font;
    font-size: 1.25em;
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
</style>