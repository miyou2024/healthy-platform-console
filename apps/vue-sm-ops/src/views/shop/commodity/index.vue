<script lang="tsx" setup>
import { NButton, useMessage } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'

interface Song {
  id: number;
  commodity_names: string;
  commodity_status: string;
  commodity_price: string;
  commodity_specs: any[];
  commodity_skus: any[];
}

const message = useMessage()

function createColumns(
  {
    play
  }: {
    play: (row: Song) => void
  }): DataTableColumns<Song> {
  return [
    {
      title: 'ID',
      key: 'id',
      width: 50
    },
    {
      title: '状态',
      key: 'commodity_status',
      resizable: true
    },
    {
      title: '价格',
      key: 'commodity_price',
      resizable: true
    },
    {
      title: '商品名称',
      key: 'commodity_name',
      resizable: true
    },
    {
      title: '商品规格',
      key: 'commodity_specs',
      resizable: true,
      minWidth: 100,
      maxWidth: 500,
      render: (row) => {
        return <NButton type='text'>{row.commodity_specs[0].name}</NButton>
      }
    },
    {
      title: '商品SKU',
      key: 'commodity_skus',
      resizable: true,
      minWidth: 100,
      maxWidth: 500
    },
    {
      title: '操作',
      key: 'actions',
      render(row) {
        return h(
          NButton,
          {
            strong: true,
            tertiary: true,
            size: 'small',
            onClick: () => play(row)
          },
          { default: () => 'Play' }
        )
      }
    }
  ]
}

const data: Song[] = [
  {
    id: 3,
    commodity_status: 'Active',
    commodity_price: '123.21',
    commodity_name: '高端大气丝巾',
    commodity_specs: [
      {
        id: 1, name: '颜色',
        list: [
          {
            id: 1, value: "红色"
          },
          {
            id: 2, value: "黄色"
          },
          {
            id: 3, value: "橙色"
          }
        ]
      },
      {
        id: 2, name: '尺寸',
        list: [
          {
            id: 1, value: "大"
          },
          {
            id: 2, value: "中"
          },
          {
            id: 3, value: "小"
          }
        ]
      }
    ]
  },
]

const columns = createColumns({
  play(row: Song) {
    message.info(`Play ${ row.title }`)
  }
});

const pagination = false as const;
</script>

<template>
  <h1>shop commodity</h1>
  <n-data-table
    :columns="columns"
    :data="data"
    :pagination="pagination"
    :bordered="false"
  />
</template>

<style scoped>

</style>
