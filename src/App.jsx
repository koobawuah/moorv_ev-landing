import React from 'react'
//import { CustomBtn, Link } from './components'
import CustomBtn from './components/CustomBtn'
import Link from './components/Link'

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

const App = () => {

    return (
        <div className="h-screen text-base text-gray-100 bg-black">
            <Header />
            hello
        </div>
    )
}

export default App
