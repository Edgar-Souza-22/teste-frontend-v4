// src/stores/exampleStore.ts
import { defineStore } from 'pinia'

export const useExampleStore = defineStore('example', {
  state: () => ({
    message: 'Hello from Pinia!',
  }),
})
