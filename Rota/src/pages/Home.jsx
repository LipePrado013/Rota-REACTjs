import Header from "../components/Header"
import Slide from "../components/Slide"
import './Home.css'

function Home() {
    return (
        <div className="pb-10">
            <Header /> 

            <div className="flex justify-center mt-5">
                <img src="src/assets/img/logo-rota-deitado1.png" width={'150rem'} />
            </div>

            <div className="  flex flex-col gap-5 mt-3 ">

                <a href="#" className=" flex relative h-[8rem]" >
                    <div className="absolute w-[90%] h-full bgMy"></div>
                    <div className="absolute text-justify pl-1 w-[75%] h-[100%] flex flex-col ">
                        <h1 className="text-xl">Museu do café</h1>
                        <p className="text-md">O Museu do café conta com seus historiadores a historia de Santos junto ao comércio do café, um inicio marcante pelas...</p>
                    </div>
                    <div className="w-full flex justify-end">
                        <img src="src/assets/img/slide3.png" width={'150rem'} />
                    </div>
                </a>

                <a href="#" className=" flex relative h-[8rem]" >
                    <div className="absolute w-[90%] h-full bgMy"></div>
                    <div className="absolute text-justify pl-1 w-[75%] h-[100%] flex flex-col ">
                        <h1 className="text-xl">Museu do café</h1>
                        <p className="text-md">O Museu do café conta com seus historiadores a historia de Santos junto ao comércio do café, um inicio marcante pelas...</p>
                    </div>
                    <div className="w-full flex justify-end">
                        <img src="src/assets/img/slide1.png" width={'150rem'} />
                    </div>
                </a>

            </div>
            <Slide />
            <div className="h-[100rem]">

            </div>
        </div>
    )
}

export default Home 