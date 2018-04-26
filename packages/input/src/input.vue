<template>
<span class="tb-input" :class="{'tb-input-disabled': disabled}">
  <input
    class="tb-input-field"
    :placeholder="placeholder"
    :disabled="disabled"
    :value="value"
    @focus="$emit('focus', $event)"
    @input="$emit('input', $event.target.value)"/>
  <label class="tb-input-label"></label>
  <div v-show="clearable" @click="clearValue" class="tb-input-clear">
    <span>x</span>
  </div>
</span>
</template>

<script>
export default {
  name: 'TB-input',
  props: {
    value: String,
    disabled: Boolean,
    placeholder: String,
    clearable: Boolean
  },
  model: {
    prop: 'value',
  },
  methods: {
    clearValue () {
      console.log('clear')
      this.value = ''
      // this.$emit('input', '')
    }
  }
}
</script>

<style lang="less">
.tb-input-field:focus+.tb-input-label:after{
  transform: translate3d(0, 0, 0);
}
.tb-input-field:focus~.tb-input-disabled{
  cursor: not-allowed;
}
.tb-input-field:focus~.tb-input-clear{
  // display: block;
  // visibility: visible;
  opacity: 1;
}
.tb-input{
  display: inline-block;
  height: 48px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  &-clear{
    position: absolute;
    z-index: 2;
    right: 10px;
    line-height: 15px;
    top: 14px;
    height: 15px;
    width: 15px;
    text-align: center;
    border-radius: 100%;
    padding: 2px;
    background: #ddd;
    // visibility: hidden;
    opacity: 0;
  }
  &-field{
    color: #3c3c3c;
    width: 100%;
    height: 100%;
    border: none;
    font-size: 14px;
    border-bottom: 1px solid #ddd;
    background-color:transparent;  
    -moz-appearance:none;  
    -webkit-appearance:none;  
    padding: 0 10px;
    position: relative;
    &:focus{
      outline: 0;
    }
  }
  
  &-label{
    position: absolute;
    z-index: -1;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    text-align: left;
    line-height: 3.8;
    padding: 0 10px;
    &:before, &:after{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: calc(100% - 10px);
      border-bottom: 1px solid #B9C1CA;
    }
    &:after{
      border-color: #CE5663;
      transition: transform 0.3s;
      transform: translate3d(-100%, 0, 0);
    }
  }
}
</style>
