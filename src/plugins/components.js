import Vue from "vue"
import Hydrate from "vue-lazy-hydration"
import Button from "~/components/button/button.vue"
import Image from "~/components/image/image.vue"
import FilmCover from "~/components/film/film-cover.vue"
import Footer from "~/components/footer/footer.vue"
import Header from "~/components/header/header.vue"
import Logo from "~/components/logo/logo.vue"
import Placeholder from "~/components/placeholder/placeholder.vue"
import Video from "~/components/video/video.vue"

Vue.component("v-button", Button)
Vue.component("v-image", Image)
Vue.component("v-film-cover", FilmCover)
Vue.component("v-footer", Footer)
Vue.component("v-header", Header)
Vue.component("v-hydrate", Hydrate)
Vue.component("v-logo", Logo)
Vue.component("v-placeholder", Placeholder)
Vue.component("v-video", Video)
