# Vue-Idle-Runner

Vue module with component wrapper and mixin for running component / function in each idle call, this help a lot for better performance and follow the principle of Lightouse audit for performance in `First CPU Idle` and `Time to Interactive
`, so that each component or function can be run individually rather than running at the same time 

# Usage
main.js:
```javascript
import Vue from 'vue'
import App from './App.vue'
import VueIdleRunner from 'vue-idle-runner'

Vue.use(VueIdleRunner)
```

Template:
```html
<idle-queue>
  <any-component />
</idle-queue>
```

After page onload:
```html
<onload-idle-queue>
  <any-component />
</onload-idle-queue>
```


Mixin:

```html
<template>
  <any-component v-if="isIdle" />
</template>
<script>
// a reactive property `this.isIdle` can be access 
import idle from 'vue-idle-runner/dist/mixins/idle'
export default {
  mixins: [idle],
}
</script>
```

After page onload:
```html
<template>
  <any-component v-if="isOnloadIdle" />
</template>
<script>
// a reactive property `this.isOnloadIdle` can be access 
import onLoadIdle from 'vue-idle-runner/dist/mixins/onLoadIdle'
export default {
  mixins: [onLoadIdle],
}
</script>
```
