<template>
  <div class="app-wrapper">
    <div :class="{ 'has-tags-view': needTagsView }" class="main-container" :style="mainStyle">
      <div class="header-wrapper">
        <navbar />
      </div>
      <div class="height-placeholder"></div>
      <app-main />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Navbar, AppMain } from './components'
import { useChildRouteStore } from '@/store/childRoute'
import { useSettingsStore } from '@/store/settings'

type obj = {
  [key: string]: string | number
}

const childRouteStore = useChildRouteStore()

const mainStyle = computed(() => {
  const obj: obj = {}
  if (!childRouteStore.hasRoute) {
    obj.marginLeft = 0
  }
  return obj
})

const { tagsView: needTagsView } = useSettingsStore()
</script>
