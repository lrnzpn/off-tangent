<template>
  <div class="menu">
        <transition name="slide">
            <div 
                class="menu-panel" 
                v-if="isMenuOpen">
                <slot></slot>
            </div>
        </transition>
  </div>
</template>

<script>
export default {
    fetch({store}) {
        store.commit('setNavState')
    },
    methods: {
        toggle() {
            this.$store.commit('toggleNav')
        },
        closeMenu() {
           this.$store.commit('setNavState', false);
        }
    },
    computed: {
        isMenuOpen() {
            return this.$store.state.isNavOpen;
        }
    },
    mounted() {
        window.addEventListener('resize', this.closeMenu)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.closeMenu)
    }
}
</script>

<style lang="scss" scoped>
// slide down
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-100%);
  transition: all 300ms ease-in 0s;
}

.menu-panel {
  overflow-y: auto;
  position: fixed;
  left:0;
  top: 0;
  width: 100vw;
  z-index: 1;

    @media screen and (max-width:768px) {
        top: 64px;
        width: 100vw;
    }

}
</style>