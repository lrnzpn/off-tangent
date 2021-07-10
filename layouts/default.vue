<template>
  <v-app dark>
    <transition name="fade">
        <Loading v-if="showHideSpinner"/>
    </transition>
    <v-main>
        <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Loading from '../components/Loading'

export default {
    components: {
        Loading,
    },
    beforeCreate() {
        this.showHideSpinner = true;   
    },
    mounted() {
        setTimeout(() => {
            this.showHideSpinner = false;
        }, 1000)
    },
    data() {
        return {
            showHideSpinner: true
        };
    }
}
</script>

<style lang="scss">
.h-100 {
    height: 100%;
}  

.article-subheading {
    color: #031152;
    font-family: $subheading-font;
    font-weight: 700;
    font-size: 1.25em;
}

.article-subheader {
    font-size: 1.25em;
    font-weight: bold;
    color: #031152;
    line-height: 25px;
    font-family: $subheading-font;
    display: inline-block;
    text-transform: uppercase;

    @media screen and (max-width: 768px) {
        font-size: 1em;
    }
}
.article-text {
    font-size: 18px;
    line-height: 30px;
    color: #232333;
    font-family: $body-font;

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }

    a {
        color: #001A90;
        font-weight: 700;
    }
}

// fade
.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

</style>
