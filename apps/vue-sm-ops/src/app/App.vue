<script setup lang="tsx">
import { VueNaiveButton } from '@healthy-platform-console/vue-naive-ui-component'

import type { Component } from 'vue'
import { defineComponent, h } from 'vue'
import { createTheme, datePickerDark, inputDark, NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import {
  BagOutline as BagOutlineIcon,
  FishOutline as FishIcon,
  PawOutline as PawIcon
} from '@vicons/ionicons5'
import { zhCN, dateZhCN } from 'naive-ui'
import { RouterLink } from 'vue-router'

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: '首页',
    key: 'home',
    icon: renderIcon(FishIcon),
    children: [
      {
        label: () => (
          <RouterLink to={ '/' }>中心</RouterLink>
        ),
        key: 'braise',
      },
      {
        label: () => (
          <RouterLink to={ '/about' }>关于</RouterLink>
        ),
        key: 'braise',
      },
    ]
  },
  {
    label: '测试',
    key: 'bear-paw',
    icon: renderIcon(PawIcon),
    children: [
      {
        label: () => (
          <RouterLink to={ '/jsx' }>jsx</RouterLink>
        ),
        key: 'protect-wild-animals'
      }
    ]
  },
  {
    label: () => (
      <RouterLink to={ '/shop' }>商城中心</RouterLink>
    ),
    key: 'shop',
    icon: renderIcon(BagOutlineIcon),
  }
]

const defaultExpandedKeys = [ 'fish', 'braise' ];

const darkTheme = createTheme([ inputDark, datePickerDark ]);

</script>

<template>
  <n-config-provider :theme="darkTheme" :locale="zhCN" :date-locale="dateZhCN">
    <NMessageProvider>
      <header>
        <n-menu
          :mode="'horizontal'"
          :options="menuOptions"
          :default-expanded-keys="defaultExpandedKeys"
          accordion
        />
      </header>
      <RouterView/>
    </NMessageProvider>
  </n-config-provider>
</template>

<style scoped lang="less">

</style>
