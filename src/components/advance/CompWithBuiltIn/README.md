# Advance usage of Vue built-in component with JSX

When using JSX as the component file format, that will result in the loss of some built-in features Vue offers; therefore, we need to use a different approach to access these features.

We are going to demonstrate here how to access Vue built-in component.

Component Backdrop
Here we create a re-usable component Backdrop using the Vue built-in component `Teleport` to move the component physical DOM outside of the App component structure (to get around the HTML/CSS restriction how to position a fixed element)

Here is the component file structure

```
/Backdrop
  backdrop.css
  BackdropInner.tsx
  Backdrop.tsx
@NOTE you could add that index.ts boilerplate to export default.
```

Starting with the `backdrop.css`

```css
.backdrop {
  /* z-index: we do not set it here, this will deal with in the js code */
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 30%;
  display: none;
}
```

Very simple, in the comment already explain how to use this.

Next `BackdropInner.tsx`

```ts
import './backdrop.css'

declare type BackdropProps = {
  zIndex: number
  display: string
}
// component  
export default function BackdropInner (
  props: Partial<BackdropProps> // Use the utility type Partial to set everything to optional
) {
  const styleObj = {
    display: props.display,
    'z-index': props.zIndex // one of the problems with using JSX, cannot use kebab-case for props key!
  }

  return (
    <div class='backdrop' style = { styleObj } />
  )
}
```

You might have noticed this component looks different from the one you usually sees; this is called "pure functional component". The advantage of using this kind of component is lite, when your component really got not much todo - such as just display something, we only use the props to set the CSS properties, and there is no input from this component.

Next look at the `Backdrop.tsx`

```ts
import { h, Teleport, defineComponent } from 'vue'
import BackdropInner from './BackdropInner'

export default defineComponent({
  name: 'Backdrop',
  props: {
    zIndex: {
      type: Number,
      required: false,
      default: 0
    },
    display: {
      type: String,
      required: false,
      default: 'none'
    }
  },
  setup (props) {

    return () => h(
      Teleport,
      { to: 'body' },
      [h(BackdropInner, props)]
    )
  }
})
```

Here we set some of the default props values, the import part is in the setup function. We use the lowest level h renderer from Vue to construct the component.

When we have some very special cases that needs to access the low-level renderer, that's when we use JSX format.

Here is a problem, props drilling passing props from one component to another and then another (If we were using SFC, the above example can be in just one file).

### Example using SFC 

@TODO 

--- 

Joel Chu (c) 08-2022