<script setup>
import { computed, ref } from 'vue'
import { previewBinaryFile } from '../libs/previewBinary.js';
defineEmits(['closeModal', 'saveTodo'])
const props = defineProps({
  todo: {
    type: Object,
    default: { id: undefined, category: '', description: '' } //add mode
  }
})
const previousTodo = computed(() => props.todo)

const uploadedFileName = ref('')
const previewDocURL = ref('')
const previewImageURL = ref('')

const preview = (event) => {
  console.log(event.target.files[0]); //binary object
  uploadedFileName.value = event.target.files[0].name //binary object file name
  console.log(uploadedFileName.value);
  if (uploadedFileName.value.endsWith('.pdf')) {
    previewDocURL.value = previewBinaryFile(event.target.files[0])
  } else {
    previewImageURL.value = previewBinaryFile(event.target.files[0])
  }
}
</script>

<template>
  <div class="flex flex-col p-2 gap-5">
    <!-- Add or Edit Heading -->
    <h1 class="font-semibold text-xl">
      {{ previousTodo.id === undefined ? 'Add Todo' : 'Edit Todo' }}
    </h1>
  </div>
  <div class="flex flex-col p-2">
    <div class="flex gap-3">
      <span>Category</span>
      <input type="radio" v-model="previousTodo.category" value="home" />
      <span>home</span>
      <input type="radio" v-model="previousTodo.category" value="work" />
      <span>work</span>
    </div>
    <div class="flex gap-3">
      <span>Description</span>
      <input v-model.trim="previousTodo.description" type="text"
        class="w-full p-0.5 border border-gray-300 rounded-lg outline-none" />
    </div>
  </div>

  <div>choose your file: <input type="file" accept=".pdf, .jpg, .png" @change="preview" />
    <img v-show="previewImageURL" :src="previewImageURL" class="w-24 h-24">
    <a v-show="previewDocURL" :href="previewDocURL" target="_blank" class="text-purple-400 italic hover:text-purple-600">
      {{ uploadedFileName }}
    </a>
  </div>

  <div class="flex gap-3 p-2">
    <button @click="$emit('saveTodo', previousTodo)"
      class="bg-slate-100 border border-gray-300 rounded-md hover:opacity-80 px-2 py-0.5">
      Save
    </button>
    <button @click="$emit('closeModal', false)"
      class="bg-slate-100 border border-gray-300 rounded-md hover:opacity-80 px-2 py-0.5">
      Cancel
    </button>
  </div>
</template>

<style scoped></style>
