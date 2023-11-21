"use client"
export default function Image({url, title}: {url:string, title:string}) {
    return (
        <div className="flex flex-col bg-cover bg-center w-screen h-screen mb-[100px]" style={{backgroundImage: `url('${url}')`}}>
            <div className="z-100 w-full flex font-mono text-sm justify-end text-right mt-[95vh]">
                <p className="fixed lg:static p-4 backdrop-blur-2xl w-[20vw]">{title}</p>
            </div>
        </div> 
    )
}
  