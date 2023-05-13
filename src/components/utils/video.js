import React from "react"
export const Video = ({ videoSrcURL, videoTitle, ...props}) => (
    <div className="video">
        <iframe
            src={videoSrcURL}
            title={videoTitle}
            loading="auto"
            {...props}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
    </div>
)