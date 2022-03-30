import RdCmVue from './RdCm.vue'
const RdCm  = {
  install: function (Vue) {
    Vue.component('rd-cm', RdCmVue)
    Vue.prototype.$rdcm = function (e,root,tag) {
      root.$emit('rdcm',{
        tag: tag,
        x: e.clientX,
        y: e.clientY
      })
    }
  }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(RdCm)
}

export default RdCm
