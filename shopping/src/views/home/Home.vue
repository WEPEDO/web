<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend :recommends="recommends"></recommend>
    <feature-view></feature-view>
    <tab-control :titles="['流行', '新款', '精选']"></tab-control>
    <ul>
      <li>图片1</li>
      <li>图片2</li>
      <li>图片3</li>
      <li>图片4</li>
      <li>图片5</li>
      <li>图片6</li>
      <li>图片7</li>
      <li>图片8</li>
      <li>图片9</li>
      <li>图片10</li>
      <li>图片11</li>
      <li>图片12</li>
      <li>图片13</li>
      <li>图片14</li>
      <li>图片15</li>
      <li>图片16</li>
      <li>图片17</li>
      <li>图片18</li>
      <li>图片19</li>
      <li>图片20</li>
      <li>图片21</li>
      <li>图片22</li>
      <li>图片23</li>
      <li>图片24</li>
      <li>图片25</li>
      <li>图片26</li>
      <li>图片27</li>
      <li>图片28</li>
      <li>图片29</li>
      <li>图片30</li>
      <li>图片31</li>
      <li>图片32</li>
      <li>图片33</li>
      <li>图片34</li>
      <li>图片35</li>
      <li>图片36</li>
      <li>图片37</li>
      <li>图片38</li>
    </ul>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import TabControl from 'components/content/tabcontrol/TabControl'

  import HomeSwiper from './childComps/HomeSwiper'
  import Recommend from './childComps/Recommend'
  import FeatureView from './childComps/FeatureView'

  import { getHomeMultiData } from 'network/home';
  

  export default {
    name: 'Home',
    components: {
      // 注册一下
      NavBar,
      HomeSwiper,
      Recommend,
      FeatureView,
      TabControl,
    },
    // 用于保存请求来的数据
    data (){
      return {
        banners: [],
        recommends: []
      }
    },

    // 生命周期函数，首页组件一旦创建完成就发送网络请求
    created() {
      getHomeMultiData().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    
  }
</script>

<style>
  #home {
    padding-top: 44px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: white;
/* posirion: relative;相对于元素原来的位置进行偏移 */
/* position: absolute;可以让元素放在页面上的任何位置 */
    position: fixed;
    top:0;
    left:0;
    right: 0;
    /* 设置堆叠，后面的数越大优先级越高 */
    z-index: 9;
  }
</style>