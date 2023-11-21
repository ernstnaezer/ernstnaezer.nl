"use client"
import ReactPlayer from "react-player";

export default function Video({url, title}: {url:string, title:string}) {
    return (
        <div className="player-wrapper flex flex-col bg-cover bg-center w-screen h-screen mb-[100px]">
            <ReactPlayer url={url} playing={false} controls={true} width="100%" height="100%" className="react-player"/>
            <div className="z-100 w-full flex font-mono text-sm justify-end text-right mt-0">
                <p className="fixed lg:static p-4 backdrop-blur-2xl w-[20vw]">{title}</p>
            </div>
        </div> 
    )
}
  