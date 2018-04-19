/**
 * @author Nelson.L
 * Date: 18/04/18
 */
import Button from './src/button.vue';

Button.install = function (Vue) {
  Vue.component(Button.name, Button);
};

export default Button;