import Vue from 'vue'

Vue.directive('high', {
    bind(el, binding) {
        el.style.backgroundColor = "yellow"
    }

})