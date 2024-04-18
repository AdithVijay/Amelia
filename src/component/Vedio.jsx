import React from 'react'

const Video = () => {
  return (
    <div className='w-full flex justify-center' >
       <iframe 
        className=' aspect-video md:w-[60%] '
        src="https://www.youtube.com/embed/ZbEt1d5EKdw?si=oJTPl28rSNl_6rhl" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen={true} >
      </iframe>
    </div>
  )
}

export default Video
