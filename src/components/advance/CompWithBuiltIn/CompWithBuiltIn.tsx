/** 
 *  This is an example to show you how to use 
 *  the built in Component in JSX 
 *  Here we use the Teleport as an example
 * 
 *  This component is just putting the two example together
 */
import { defineComponent, ref, reactive } from "vue";
import TeleportExample from "./TeleportExample";
import Backdrop from "./Backdrop";
import { tSExpressionWithTypeArguments } from "@babel/types";

export default defineComponent({
    name: 'CompWithBuiltIn',
    components: { TeleportExample, Backdrop },
    methods: {
        toggle(target: any) {
            let lastVal: string
            if (target.display === 'none') {
                lastVal = 'block'
            } else {
                lastVal = 'none'
            }
            target.display = lastVal
            setTimeout(() => {
                target.display = lastVal === 'block' ? 'none' : 'block'
            }, 1000)
        }
    },
    setup() {
        const props1 = reactive({ display: 'none', zIndex: 1001 })
        const props2 = reactive({ display: 'none', zIndex: 1002 })

        return {
            props1,
            props2
        }
    },
    // Here we are setting up two example 
    // one call the backdrop without Teleport 
    // and another one with Teleport to see the difference 
    render() {
        return (
            <div>
                <div>
                    <h3>Backdrop without Teleport</h3>
                    <Backdrop { ...this.props1 } />
                    <button onClick={ () => this.toggle(this.props1) }>Toggle Backdrop</button>
                </div>
                <div>
                    <h3>Backdrop with Teleport</h3>
                    <TeleportExample { ...this.props2 } />
                    <button onClick={ () => this.toggle(this.props2 )}>Toggle Backdrop with Teleport</button>
                </div>
            </div>
        )
    }
})