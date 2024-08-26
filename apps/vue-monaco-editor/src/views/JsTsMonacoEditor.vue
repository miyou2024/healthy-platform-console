<script lang="ts" setup>
import { VueMonacoEditor } from '@guolao/vue-monaco-editor'
import { ref, shallowRef } from 'vue'

defineOptions({
  name: 'JsTsMonacoEditor',
})

const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
}

const vueMonacoEditor = ref();

const code = ref(`
import { VueMonacoEditor } from '@guolao/vue-monaco-editor'
import { ref, shallowRef } from 'vue'

defineOptions({
  name: 'JsTsMonacoEditor',
})

const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
}

const vueMonacoEditor = ref();

const code = ref(\`\`)
const editor = shallowRef()
const handleMount = (editorInstance: any) => {
  console.log(\`handleMount\`, editor, editorInstance);
  editor.value = editorInstance
}

// your action
function formatCode() {
  editor.value?.getAction('editor.action.formatDocument').run()
}
`)
const editor = shallowRef()
const handleMount = (editorInstance: any) => {
  console.log(`handleMount`, editor, editorInstance);
  editor.value = editorInstance
}

// your action
function formatCode() {
  editor.value?.getAction('editor.action.formatDocument').run()
}
</script>

<template>
  <div class="container">
    <VueMonacoEditor
      ref="vueMonacoEditor"
      v-model:value="code"
      language="javascript"
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
