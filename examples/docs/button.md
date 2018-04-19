<style>
th{
  width: 189px
}
</style>
<script>
 export default {
    methods: {
    }
  }
</script>
# button
## 基本用法
<div class="code_inline">
  <TB-button>Default</TB-button>
  <TB-button type="disabled">disabled</TB-button>
</div>

:::demo
```html
<TB-button>Default</TB-button>
<TB-button type="disabled">disabled</TB-button>
```
:::

## 带Icon的按钮
<div class="code_inline">
  <TB-button icon="search">search</TB-button>
  <TB-button icon="angle-double-right">next</TB-button>
  <TB-button icon="expand">expand</TB-button>
  <TB-button icon="compress" type="disabled">compress</TB-button>
</div>

:::demo
```html
<TB-button icon="search">search</TB-button>
<TB-button icon="angle-double-right">next</TB-button>
<TB-button icon="expand">expand</TB-button>
<TB-button icon="compress" type="disabled"> Example of compress</TB-button>
```
:::

## 加载中
<div class="code_inline">
  <TB-button :loading="true">done</TB-button>
</div>

:::demo
```html
<TB-button :loading="true">done</TB-button>
```
:::

### Attributes
| 参数       | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------  |---------- |------------- |-------- |
|type       |	类型                                 |	string   |	defualt/disabled           |	defualt       |
|icon	      | 图表                                 |	string    |	—  |	— |
|loading    |	加载中                            |	boolean    |	—             |	false      |
|disabled   |	是否禁用                            |	boolean   |	—	            | false   |

### Event
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
|click         |点击回调| —  |