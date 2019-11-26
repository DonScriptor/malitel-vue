import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {faArrowRight, faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";
// import {} from "@fortawesome/free-regular-svg-icons";

library.add(faArrowRight, faLongArrowAltRight);
Vue.component("font-awesome-icon", FontAwesomeIcon); // registered globally
