import { Slide, useScrollTrigger } from "@material-ui/core"
const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger()
  const width = window.innerWidth;
  let isMobile = (width <= 768);
  return (
    <Slide appear={false} direction="down" in={!(trigger && isMobile)}>
      {children}
    </Slide>
  )
}
export default HideOnScroll