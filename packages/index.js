/**
 * @author Nelson.L
 * Date: 18/04/18
 */
import tbButton from './button/index.js';
import tbInput from './input/index.js';

const components = [
  tbButton,
  tbInput
]

const install = function(Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  // MetaInfo.install(Vue)
  // Vue.prototype.$loading = WLoadingBar
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  tbButton
}