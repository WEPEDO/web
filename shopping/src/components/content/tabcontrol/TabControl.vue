<template>
  <div class="tab-control">
    <!-- 根据数组传来的值进行遍历 -->
    <div v-for="(item,index) in titles" 
                  class="tab-control-item"
                  :key="items" 
                  :class="{active: index === currentInedx}" 
                  @click="tabclick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl", 
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data(){
    return{
      currentInedx: 0,
    }
  },
  methods: {
    tabclick (index) {
      this.currentInedx = inedx;
    }
  },
}
</script>

<style lang="less" scoped>
  .tab-control{
    display: flex;
    text-align: center;
  }
  .tab-control-item {
    flex: 1;
    position: relative;
    height: 40px;
    line-height: 40px;
  }

  .tab-control-item  span {
    padding: 3px;
  }
  .active {
    color: var(--color-high-text);
  }

  .active span{
    border-bottom: 1.5px solid var(--color-tint);
  }
</style>
