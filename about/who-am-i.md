---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/141991010',
    name: 'Xinyue Zhang',
    title: '赤子英金创始者',
    links: [
      { icon: 'github', link: 'https://github.com/RainyDreams' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      你好！我是 Xinyue Zhang
    </template>
    <template #description>
      你好！
    </template>
    <template #lead>
      目前就读于赤峰二中，是一名信息技术爱好者
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>