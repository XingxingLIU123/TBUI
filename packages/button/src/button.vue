<template>
  <button
    @click="disabled || type === 'disabled' ? '' : $emit('click')"
    :disabled="disabled"
    class="tb-button"
    :class="['tb-button-' + type, disabled ? 'tb-button-disabled' : '']"
  >
    <i v-if="loading" class="fa fa-spinner fa-spin"></i>
    <i v-if="icon !== ''" :class="['fa-' + icon, 'fa']"></i>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'TB-button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: ''
    },
    loading: Boolean,
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less">
.tb-button{
  color: #fff;
  border: none;
  border-radius: 24px;
  padding: 5px 10px;
  &-default{
    background: linear-gradient(41.99deg, #EB6F85 0%, #CE5663 100%);
    &:active{
      background: linear-gradient(41.99deg, #DE687E 0%, #BA4E59 100%);
    }
  }
  &:focus{
    outline: none;
  }
  &-disabled{
    background-color: #EBB5BF;
  }
}
</style>
