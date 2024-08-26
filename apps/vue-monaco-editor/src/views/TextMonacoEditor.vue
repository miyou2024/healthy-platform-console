<script lang="ts" setup>
import { VueMonacoEditor } from '@guolao/vue-monaco-editor'
import { ref, shallowRef } from 'vue'

const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
}

defineOptions({
  name: 'TxtMonacoEditor',
})

const code = ref('哈哈哈哈，这是文本编辑器，随便傻都可以输入')
const editor = shallowRef()
const handleMount = (editorInstance: any) => (editor.value = editorInstance)

// your action
function formatCode() {
  editor.value?.getAction('editor.action.formatDocument').run()
}
</script>

<template>
  <div class="container">
    <VueMonacoEditor v-model:value="code"
                     theme="vs"
                     :options="MONACO_EDITOR_OPTIONS"
                     @mount="handleMount"></VueMonacoEditor>
  </div>
</template>

<style scoped>
.container {
  border: 1px dashed gray;
  height: 500px;
}
</style>
