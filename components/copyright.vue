<script setup>
import { defineProps,ref,onMounted } from 'vue'

const props = defineProps({
  type: { 
    type: String,
    default: 'normal',
    validator: (value) => ['passage', 'project', 'normal'].includes(value)
  },
  copyright: {
    type: Object,
    default: () => ({
      author:"赤子英金用户",
      editor:"赤子英金用户",
      time:"1970-01-01",
    }),
  },
  producer: {
    type: String,
    default: "未知"
  },
  info: Array
})

const type = props.type;
const infoList = ref([]);

onMounted(()=>{
  // Default
  [
    `监制：${props.producer}`,
  ].forEach(text => {
    infoList.value.push(text);
  })
  if(type == 'passage'){
    [
      `文章作者：${props.copyright.author}`,
      `文章时间：${props.copyright.time}`,
      `责编：${props.copyright.editor}`,
      (props.copyright.needCP?`版权声明：本文章及本文章所有图片版权均归属于文章作者（本文作者：${props.copyright.author}）`:''),
    ].forEach(text => {
      infoList.value.push(text);
    })
  }
  
})

</script>

<template>
  <div class="copyright">
    <p class="copyright-text">▌本文来源：赤子英金 </p>
    <hr/>
    <div :class="`${type}-copyright`">
      <p v-for="(text, index) in infoList" :key="index">{{ text }}</p>
    </div>
    <p>赤子英金保留最终解释权</p>
    <p class="copyright-text">© 赤子英金</p>
  </div>
</template>

<style lang="scss">
.copyright {

  font-size: 12px;
  color:#b2b2b2;
  line-height: 14px;
  .copyright-text{
    color: var(--vp-c-text-1);
  }
  p,hr{
    margin: 0;
    padding: 0;
  }
  
}

</style>