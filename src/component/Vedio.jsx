import React from 'react'

const Video = () => {
  return (
    <div className='w-full flex justify-center' >
       <iframe 
        className=' aspect-video md:w-[60%] '
        src="https://www.youtube.com/embed/Ttl8Gg-P-Ao?si=pjgnxVqunq5UNxAw" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen={true} >
      </iframe>
    </div>
  )
}

export default Video
