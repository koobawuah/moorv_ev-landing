import React from 'react'
import img from './assets/moorv-ev.jpg'
import { CustomBtn, Link } from './components'

const Header = () => {

    return (
        <div className="flex flex-row justify-between p-12">
            <div className="text-2xl font-semibold tracking-wider text-gray-100">:moorv</div>
            <div className="flex gap-x-8">
                <CustomBtn value='Sign up' isSolid={true}/>
                <Link title="Login" />
            </div>
        </div>
    )
}

const Body = () => { 

    return (
        <div className="flex flex-col justify-center flex-1 w-1/2 px-16 space-y-10">
            <h1 className="text-6xl font-semibold tracking-wide text-white">Follow the electric speed and luxury</h1>
            <p className="text-2xl font-light">See into the future of electric vehicles with :moorv ev!</p>
            <div className="flex flex-row gap-x-8">
                 <CustomBtn value="Pre-order" isSolid /> <CustomBtn isSolid={false} value="Read More"/>
            </div>
           
        </div>
    )
}

const Footer = () => {

    return (
        <footer className="flex flex-row items-center justify-between h-48 px-16 py-5 text-black bg-white flex-3 rounded-t-3xl"> 
            <div>
                <ul>
                    <h1 className="text-xl font-semibold tracking-wider text-black">:moorv</h1> 
                    <p className="font-light text-black">See into the future of electric vehicles</p>
                </ul>
            </div> 
            <div>
                <ul>
                    <h3 className="mb-3 text-sm font-bold text-black uppercase">Help</h3> 
                    <li className="font-light text-black"><a href='#'>Introduction</a></li> 
                    <li className="font-light text-black"><a href='#'>Help Center</a></li>
                </ul>
            </div> 
            <div>
                <ul>
                    <h3 className="mb-3 text-sm font-bold text-black uppercase">Company</h3> 
                    <li className="font-light text-black"><a href='#'>Team</a></li> 
                    <li className="font-light text-black"><a href='#'>Press</a></li> 
                </ul>
            </div> 
            <div>
                <ul>
                    <h3 className="mb-3 text-sm font-bold text-black uppercase">Legal</h3> 
                    <li className="font-light text-black"><a href='#'>Privacy Policy</a></li> 
                    <li className="font-light text-black"><a href='#'>Terms of Service</a></li> 

                </ul>
            </div> 
            <div>
                <ul>
                    <h3 className="mb-3 text-sm font-bold text-black uppercase">Download</h3> 
                    <li className="font-light text-black"><a href='#'>App Store</a></li> 
                    <li className="font-light text-black"><a href='#'>Google Play</a></li> 

                </ul>
            </div> 

        </footer>
    )
}


const App = () => {

    return (
        <div className="relative flex flex-col h-screen text-base text-gray-100">
            <Header />
                <div className="absolute inset-y-0 right-0 -z-10">    
                    <img className="h-full w-[520px]" src={img} />
                </div>
            <Body /> 
            <Footer />
        </div>
    )
}

export default App
