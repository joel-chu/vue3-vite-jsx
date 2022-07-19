# Vue 3 + TypeScript + Vite + JSX 

This is a demo project to show how to setup what's in the title, and later we will also add [Vuex](https://vuex.vuejs.org/) and [plop.js](https://plopjs.com) 

## Setup 

```sh
$ npm create vite@latest
```

Select `vue-ts` and we have the starting point. 

Now add couple things

```sh
$ npm add -D @vitejs/plugin-vue-jsx
```

<small>*I use pnpm instead</small>

Then update your `vite.config.ts`:

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [vueJsx(), vue()]
})
```

## Using JSX with ref 

Example from `/src/components/HelloWorld.tsx` (converted from the origin `HelloWorld.vue`)

Basically, its one `tsx` file 

```ts
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(props) {
    const { msg } = props
    // @NOTE the reactive properties need to expose as count.value in the template
    const count = ref(0)
    return {
      count, 
      msg
    }
  }
  // ... skip see next section 
})
```

Here its all standard stuff, the only trick is we return the `count` and `msg` from the setup. 

The most import thing is here (this will guarantee works correctly with Vue.js)

```ts 
export default defineComponent({
  // see above 
  render() {
    return (
      <div>
        <h1>{ this.msg }</h1>
        <div>The count is using ref</div>
        <div class="card">
          <button type="button" onClick={ () => this.count++ }>count is { this.count }</button>
          <p>
            Edit
            <code>components/HelloWorld.vue</code> to test HMR
          </p>
        </div>
        // ... skip a bunch of text here
      </div>
    )
  }
})
```
Couple things to note:

1. Double curly brackets becomes single 
2. You can access the property return from `setup` via this. 

And Vue won't throw error about _Invalid VNode type: undefined_ 
You will get the above mentioned error if you return the JSX from the `setup`

## Using JSX with pinia 

This is pretty simple actually. 
Example from `src/components/CompWithPinia.tsx` 




---

Joel Chu (c) 2022

---

### Original read me 

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
