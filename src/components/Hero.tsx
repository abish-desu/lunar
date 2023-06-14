import HomeImg from '../../public/home.jpeg';
const Hero = () => {
  return (

    <div className="relative">
    <img src={HomeImg} alt="img" className="h-[100vh] w-[100vw] filter brightness-50" />
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-10">
    <h1 className="text-5xl lg:text-6xl font-bold text-white text-center">A Memorable Experience.</h1>
     <button className="bg-purple-500 hover:bg-purple-500/80 text-white py-2 px-4 font-semibold text-xl">Reserve Now</button>
    </div>
</div>
    )
}

export default Hero;