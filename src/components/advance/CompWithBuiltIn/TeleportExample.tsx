/**
 * This is the top level component that you need to call  
 * Inside it put the CSS and the actual rendered component together 
 * think of this as a glue component
 */
import { h, Teleport, defineComponent } from 'vue'
import Backdrop from './Backdrop'
 
export default defineComponent({
    name: 'TeleportExample',
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
    // we return the render function from setup 
    // just passing the props through
    setup (props) { 
        return () => h(
            Teleport,
            { to: 'body' },
            [h(Backdrop, props)]
        )
    }
})