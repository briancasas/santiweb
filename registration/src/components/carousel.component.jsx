import { useEffect } from "react";
import { useState } from "react";
import { ChevronLeft , ChevronRight} from "react-feather";
// 1. Create a component that will render a carousel of images

export default function Carousel({children: slides, autoSlide=false, autoSlideInterval=3000 }) {
const [current, setCurrent] = useState(0);


let previousSlide = () => {
  setCurrent ((current === 0 ? slides.length -1 : current -1))
};

let nextSlide = () => {
  setCurrent ((current === slides.length -1 ? 0 : current +1))
};

useEffect(()=> {
if (!autoSlide) return
const slideInterval = setInterval(nextSlide, autoSlideInterval)
return () => clearInterval(slideInterval)
},[])

    return (
        <div className="overflow-hidden relative">
          <div className="flex transition-transform ease-out duration-500" style={{transform: `translateX(-${current * 100}%)` }}>{slides}</div>
        <div className="absolute inset-0 flex items-center text-white px-10 text-3xl">
<button onClick={previousSlide} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white mr-auto">
  <ChevronLeft size={40} />
</button>
<button onClick={nextSlide}  className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white ml-auto">
<ChevronRight size={40} />
</button>
        </div>
<div className="absolute bottom-4 right-0 left-0">
  <div className= "flex items-center justify-center gap-2">
    {slides.map((_, i)=>(
    <div key={i} className={` transition-all w-3 h-3 bg-white rounded-full ${current === i ? "p-2" : "bg-opacity-50"}`}/>
    ))}

  </div>

</div>
      </div>
    );
 };
  