import Vue, { PluginFunction } from 'vue'

declare module 'vue-idle-runner' {
  export const install: PluginFunction<never>
}

declare module "vue/types/vue" {
  interface Vue {
    $idleQueue: (() => boolean)
  }
}