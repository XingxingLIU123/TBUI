<script>
export default{
  data () {
    return {
      inputVal: ''
    }
  },
  methods: {
  }
}
</script>
# Input
## 基本用法
<div class="code_inline">
  <TB-input placeholder="请输入" v-model="inputVal"/>
</div>

:::demo
```html
<TB-input placeholder="请输入" v-model="inputVal"/>
```
:::

## 禁用状态
<div class="code_inline">
  <TB-input placeholder="请输入" :disabled="true"/>
</div>

:::demo
```html
<TB-input placeholder="请输入" :disabled="true"/>
```
:::

## 可清空
<div class="code_inline">
  <TB-input placeholder="请输入" :clearable="true"/>
</div>

:::demo
```html
<TB-input placeholder="请输入" :clearable="true"/>
```
:::