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
    title: 'Founder of Chiziingiin',
    links: [
      { icon: 'github', link: 'https://github.com/RainyDreams' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Hello! I am Xinyue Zhang
    </template>
    <template #description>
      Hello!
    </template>
    <template #lead>
      Currently studying at Chifeng No.2 Middle School, I am an information technology enthusiast
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
