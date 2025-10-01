
import useEmblaCarousel from 'embla-carousel-react'

interface TopBarTypeProps {

}

export const emblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        <div className="min-w-[0px] flex-">Slide 1</div>
      </div>
    </div>
  )
}


const TopBar = () => {

}

export default TopBar;