import BackgroundVideo from "@/app/components/BackgroundVideo";


export default function Home() {
  return (
    <div className="relative min-h-screen">




      <BackgroundVideo />




      {/* Text */}

      <div>
        <img src="vcilogo2.png" alt="logo" className="absolute top-4 left-4 w-20 md:w-24 lg:w-24 h-auto" />



        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-gray-200 px-10 ">
          <h1 className="text-4xl sm:text-4xl  md:text-5xl lg:text-6xl font-bold py-8">coming soon.</h1>
          <hr className="w-8 border-t-2 border-gray-300 my-2 mx-auto" />
          <h3 className="text-lg sm:text-lg md:text-3xl lg:text-3xl font-semibold py-10 text-center">where student founders build the future</h3>
        </div>


      </div>
    </div >
  )
}