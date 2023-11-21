"use client"
import Video from "./components/video";
import Image from "./components/image";

const media = [
  {url:'/e-lvl-015.jpeg', title:'Hasard de Cheratte'},
  {url:'/e-lvl-044.jpeg', title:'Hasard de Cheratte'},
  {url:'/e-ilt-011.jpeg', title:'Institut Joseph Lemaire Tombeek'},
  {url:'https://www.youtube.com/watch?v=HZ6Q224UPkc', title:'Breakpoint 2009, Microsoft Excel'},
  {url:'https://www.youtube.com/watch?v=Rogqi5hvSXU', title:'Evoke 1998, Microsoft DOS'},
  {url:'/e-cmb-062.jpeg', title:'Compagnie Maritiem Belgique'},
]

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">

      <div className="w-screen b-white">
        <div className="z-100 max-w-5xl w-full items-center justify-between font-mono text-sm flex">
            <p className="fixed left-0 top-0 w-full justify-center pb-6 pt-8 bg-black lg:static lg:p-4">
              Collection of photographs and work by&nbsp;
              <code className="font-mono font-bold"><a href="mailto:mail@ernstnaezer.nl">Ernst Naezer</a></code>
            </p>
        </div>
      </div>

      <div className="flex flex-col bg-cover bg-center w-screen h-screen mb-[100px]" style={{backgroundImage: "url('/e-lvl-019.jpeg')"}}>
        <div className='scroll flex justify-center h-full mt-[85vh]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <div className="z-10 w-full flex font-mono text-sm justify-end text-right">
          <p className="fixed lg:static p-4 backdrop-blur-2xl w-[20vw]">Hasard de Cheratte</p>
        </div>
      </div>
     
      {media.map((item, idx) => (
        item.url.indexOf("youtube") > 0
          ? <Video key={idx} url={item.url} title={item.title}/> 
          : <Image key={idx} url={item.url} title={item.title}/> 
      ))}

     
      <div className="p-12 font-mono">© 2023 Ernst Naezer</div>

    </main>
  )
}
