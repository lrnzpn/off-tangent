<template>
  <footer class="footer" :style="cssVars">
    <img
      :src="require('../assets/images/footer/guidon-logo.png')"
      alt="The GUIDON"
      class="guidon-logo"
    />
    <h1>ABOUT THE INTERACTIVE</h1>
    <p>
      A collaboration project by the Inquiry and Features Staffs for AY
      2020-2021<br />
      Interactive designed and developed by Daniel Del Rio, Harvey Jay Sison,
      Miggy Pinaroc, Patricia Gabrielle Ramos, and Samson Elijah Tan
    </p>
  </footer>
</template>

<script>
export default {
  components: {},
  props: ["color"],
  computed: {
    cssVars() {
      return {
        "--color": this.color,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@font-face {
    font-family: 'MADE Outer Sans';
    src: url('../assets/made_outer_sans/MADE\ Outer\ Sans\ Regular\ PERSONAL\ USE.otf') format('opentype');
}

$heading-font: 'MADE Outer Sans';

.footer {
  background-color: var(--color);

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 3.5em;
  text-align: center;

  h1 {
    font-family: $heading-font;
    font-size: 0.9em;
    color: #f4f4f4;
    margin-top: 1.5em;
    margin-bottom: 1em;

    @media screen and (max-width: 768px) {
        font-size: .75em;
    }
  }

  p {
    font-size: 0.9em;
    color: #f4f4f4;

    @media screen and (max-width: 768px) {
        font-size: .75em;
    }
  }
}

.guidon-logo {
  width: 250px;
  height: 100%;
}
</style>