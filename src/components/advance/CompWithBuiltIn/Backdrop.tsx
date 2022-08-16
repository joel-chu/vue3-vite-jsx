/** 
 * This component is just the backdrop render the backdrop 
 */
import './backdrop.css'

declare type BackdropProps = {
  zIndex: number
  display: string
}
// component  
export default function Backdrop (
  props: Partial<BackdropProps> // Use the utility type Partial to set everything to optional
) {
  const styleObj = {
    display: props.display,
    'z-index': props.zIndex // one of the problems with using JSX, cannot use kebab-case for props key!
  }
  console.log('Backdrop props', props)
  return (
    <div class='backdrop' style = { styleObj } />
  )
}