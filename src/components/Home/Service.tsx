import Img from '../../../public/wedding.jpeg'

const Service = () => {
  return (

    <div className="relative">
    <img src={Img} alt="img" className="h-[90vh] w-[100vw] filter brightness-50" />
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-12 px-44">
    <h1 className="text-3xl font-bold text-white text-center">Events & Weddings</h1>
                    <p className="text-white font-semibold text-center">
                    Ladies and gentlemen, history keeps repeating itself but doesn't teach us any lessons. 'Never again' has turned into 'again and again and again.' So today, ladies and gentlemen, take Hotel Lunar as a wake-up call and a message to be our messenger that people are the ones who can change what they want to change. 
                    </p>
    </div>
</div>    )
}

export default Service