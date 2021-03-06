export const state = () => ({
    isNavOpen: false,
})

export const mutations = {
    toggleNav(state) {
        state.isNavOpen = !state.isNavOpen
    },
    setNavState(state, status) {
        state.isNavOpen = status
    },
}