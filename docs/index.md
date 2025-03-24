---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "QuaQA"
  text: "O patinho do QA"
  tagline: Automação e padronização na geração de casos de teste de software.
  image:
    src: /pato.png
  actions:
    - theme: brand
      text: "VS Code Marketplace"
      link: https://marketplace.visualstudio.com/items?itemName=quaqa-pato.quaqa-chat
    - theme: secondary
      link: "/docs"
      text: "Documentação"
# features:
#   - title: Feature A
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature B
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature C
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

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

## Diga olá à nossa equipe incrível.

<VPTeamMembers size="small" :members="members" />
