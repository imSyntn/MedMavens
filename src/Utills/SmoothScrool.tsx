import { ReactLenis } from 'lenis/react'
import 'lenis/dist/lenis.css';

const SmoothScroll = ({children}: {children: React.ReactNode}) => {
    const options = {
        duration: 1.5,
        smooth: true
    }
  return (
    <ReactLenis root options={options}>
        {children}
    </ReactLenis>
  )
}

export default SmoothScroll