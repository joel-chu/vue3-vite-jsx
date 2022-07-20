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

Example from `/src/components/basics/HelloWorld.tsx` (converted from the origin `HelloWorld.vue`)

Basically, its one `tsx` file 

```tsx
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(props) {
    const { msg } = props
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

```tsx
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
            Edit <code>components/HelloWorld.vue</code> to test HMR
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
2. You can access the property return from `setup` via `this`
3. The event handling needs to use `on` + event name instead of the Vue shorthand 

And Vue won't throw error about _Invalid VNode type: undefined_ 
You will get the above mentioned warning (it might become an actual error in the future release) 
if you return the JSX from the `setup`

One other thing is - _Look mom, no `.value`_. You don't need to access the property like `this.count.value` from the `ref`. Added bonus.

## Using JSX with pinia 

One thing nice about [pinia](https://pinia.vuejs.org/) is the setup (from `src/main.ts`)

```ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App'
// create the pinia instance
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
// skip a bunch of code 
```

This is pretty simple actually. 
First we take a look at the store from `src/stores/pinia/msg.ts` 

```ts
import { defineStore } from 'pinia'

export const useMsgStore = defineStore('msg', {
  state: () => ({
    msg: 'pinia message'
  }),
  getters: {
    stockMsg: (state) => 'stock ' + state.msg
  },
  actions: {
    write(newMsg: string) {
      this.msg = newMsg
    }
  }
})
```

It's pretty straight forward; now take a look at the jsx file 
Example from `src/components/basics/CompWithPinia.tsx` 

```tsx
import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useMsgStore } from '../stores/pinia/msg'

export default defineComponent({
  name: 'CompWithPinia',
  setup() {
    const store = useMsgStore()
    const { msg, stockMsg } = storeToRefs(store)

    const changeText = (e: Event) => {
      const value = (e.target as HTMLInputElement).value
      store.write(value)
    }

    return {
      msg, 
      stockMsg,
      changeText
    }
  },
  render() {
    return  (
      <div>
        <h3>CompWithState using pinia</h3>
        msg: { this.msg }
        <br />
        stockMsg: { this.stockMsg }
        <br />
        <input type="text" name="changeMe" onChange={ this.changeText } />
      </div>
    )
  }
})
```

Again we are using the `render` property from the `defineComponent` to output the JSX.
Also using the setup to return the properties that we are interested in, and like the last example, 
we can access them via the `this` 

One interesting thing to note is the use of `storeToRefs`, if we don't use it then we can't destruct the 
property from the store directly. They are reactive and we access them without the need of `.value` 

## Using JSX with Vuex 

First take a look at how we setup the [Vuex](https://vuex.vuejs.org/)
Example from `src/stores/index.ts`, we group together all the namespaced stores and init in one place

```ts
import { createStore } from 'vuex'
import msgStore from './msg'
import numStore from './num'

export const vuexStores = createStore({
  modules: {
    msgStore,
    numStore
  },
  strict: false // even in production, do not switch it on, unless you need to deep debug via devTool 
})
```

Then in the `src/main.ts` 

```ts 
// ... 
import { vuexStores } from './stores'

const app = createApp(App)
app.use(vuexStores)
// ...
```

Now take a look at one of the store defintion file in `src/stores/num.ts`

```ts 
// for typing 
export interface NumStoreState {
  num: number
}
// main export 
export default {
  state() {
    return {
      num: 0
    }
  },
  mutations: {
    add(state: NumStoreState) {
      ++state.num
    }
  },
  namespaced: true
}
```

Very simple and straight forward, and finally the component `src/components/basics/CompWithVuex.tsx` 

```ts 
import { defineComponent } from "vue"
import { mapState, mapMutations } from "vuex"

export default defineComponent({
  name: 'CompWithVuex',
  computed: {
    ...mapState('numStore', ['num'])
  },
  methods: {
    ...mapMutations('numStore', ['add'])
  },
  setup() {
    // we don't actually need to use the setup here
  },
  render() {
    return (
    <div>
      <p>This component is using Vuex</p>
      <h2>{ this.num }</h2>
      <div class="card">
        <button type="button" onClick={ () => this.add() }>count is { this.num }</button>
        <p>
          Edit
          <code>components/CompWithVuex</code> to test HMR
        </p>
      </div>  
    </div>
    )
  }
})
```

Vuex works little bit different from pinia, using the `mapState` and `mapMutations` makes 
them available in the JSX template automically without the need to export from `setup`. 

## @TODO Higher Order Component

This is what the final assembly of all the components put together, 
and the top level component govern what this components collection (could call it a View) does. 
In here, I think we could also call it a Provider / Consumer pattern, the top level component 
provide the necessary data and the child component only dealing with the presentation and user interaction.
When using with router, this is what normally refer to as a Page or Route. 



## @TODO Testing 

## @TODO plopfile.js putting everything together in a re-usable way


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

--- 

Special thanks to [Juju blog](https://juju.one/using-jsx-with-vue3) and 
[LogRocket](https://blog.logrocket.com/using-jsx-with-vue/) articles, that helps me to 
have a better understand how JSX work within Vue.js. 
