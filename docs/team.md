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
    avatar: 'https://www.github.com/aas8.png',
    name: 'Adriana Alves',
    title: 'Member',
    links: [
      { icon: 'github', link: 'https://github.com/aas8' },
      
    ]
  },
  {
    avatar: 'https://www.github.com/ddevdan.png',
    name: 'Daniel Carvalho',
    title: 'Member',
    links: [
      { icon: 'github', link: 'https://github.com/ddevdan' },
      
    ]
  },
  {
    avatar: 'https://www.github.com/silvercent011.png',
    name: 'Sidney Alex',
    title: 'Member',
    links: [
      { icon: 'github', link: 'https://github.com/silvercent011' },
    ]
  },
  
]
</script>

<VPTeamPage>

<VPTeamMembers
    :members="members"
  />
</VPTeamPage>
