<script lang="tsx" setup>


import { BagOutline as BagOutlineIcon, FishOutline as FishIcon, PawOutline as PawIcon } from '@vicons/ionicons5'
import { type MenuOption, NIcon } from 'naive-ui'
import { Component, h } from 'vue'

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: () => (
      <RouterLink to={'/shop/category-tag'}>分类标签</RouterLink>
    ),
    key: 'shop_category-tag',
    icon: renderIcon(FishIcon),
  },
  {
    label: () => (
      <RouterLink to={'/shop/commodity'}>商品管理</RouterLink>
    ),
    key: 'shop_commodity',
    icon: renderIcon(PawIcon),
  },
  {
    label: () => (
      <RouterLink to={'/shop/order'}>订单管理</RouterLink>
    ),
    key: 'shop_order',
    icon: renderIcon(BagOutlineIcon),
  },
  {
    label: () => (
      <RouterLink to={'/shop/customer'}>客户管理</RouterLink>
    ),
    key: 'shop_customer',
    icon: renderIcon(BagOutlineIcon),
  }
]

const defaultExpandedKeys = ['shop_category-tag'];

const TestJsxComp = () => (
  <div>
    <h1>jsx hello word</h1>
  </div>
);

</script>

<template>
<!--  <TestJsxComp></TestJsxComp>-->
  <n-menu
    :options="menuOptions"
    :default-expanded-keys="defaultExpandedKeys"
    accordion
  />
  <RouterView></RouterView>
</template>

<style scoped>

</style>
