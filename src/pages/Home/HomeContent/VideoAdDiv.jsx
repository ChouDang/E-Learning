import React from 'react'
import "./styles/VideoAdDiv.scss"
export const VideoAdDiv = () => {
  return (
    <div className="videoAdDiv">
      <div className="videoDiv">
        <iframe
          title="Mohamad Alaloush's Story"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen=""
          src="https://www.youtube.com/embed/9JSYB59QmZw"
          width="560"
          height="315"
          frameborder="0"

        ></iframe>

      </div>
      <div className="content">
        <h2 className="heading">Transform your life through education</h2>
        <p className="about">
          Mohamad Alaloush launched a new career in software development by
          taking courses on Udemy. What will you be able to do?
        </p>
      </div>
    </div>
  )
}
