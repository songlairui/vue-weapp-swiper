# 微信小程序 swiper 组件 vue version

> 创建了 vue 版的 swiper 组件，使用方式与微信小程序 swiper 标签保持一致

## 使用场景

在组件中使用 `Swiper` 标签
`./App.vue`
```vue
<swiper
        :indicatorDots="indicatorDots" :autoplay="autoplay" :circular="circular" :vertical="vertical"
        :interval="interval" :duration="duration" :previousMargin="previousMargin" :nextMargin="nextMargin"
        :display-multiple-items="2"
        @change="debug">
    <swiper-item v-for="(item, idx) in background" :key="idx" :item-id="idx">
        <div class="swiper-item" :class="item"></div>
    </swiper-item>
</swiper>
```
App.vue 支持打包输出小程序端和浏览器端

    App.vue + `mpvue` --> 小程序
    App.vue + `vue`   --> H5

## 使用方式

为浏览器端 vue 应用全局注册 swiper 组件，
```javascript
Vue.component('swiper', Swiper)
Vue.component('swiper-item', SwiperItem)
```

### 使用要求

使用了函数式组件，需保持vue2最新

## 微信小程序Swiper功能模拟完成度

- [x] 参考 [wechatui/swiper](https://github.com/wechatui/swiper) 完成基本功能
    - [x] 使用函数式组件从swiper传入swiper-item, 传入item样式
    - [x] 函数式组件中，需为children添加 key, 优化circular切换时响应
- [x] 添加 overFlow hidden 外层
- [x] 添加指示点，响应竖向变化
- [x] 添加自动播放
    - [x] 优化 next，保持首尾衔接效果
- [x] 添加循环滚动/首尾衔接
- [x] 添加事件 change animationFinish
- [x] 添加swiper-item item-id支持 
   - [ ] 不常用，暂未支持传入
- [x] 适配 displayMultipleItems 功能
    - [x] 自动播放，增加边界条件设定
    - [x] 首尾衔接
        - [x] 优化circular切换时的变化
        - [x] 完善边界current未满足threshold情况下滑动整个容器的表现
    - [x] 修正 indicator 同步显示
    
