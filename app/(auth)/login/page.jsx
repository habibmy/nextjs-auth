'use client'

import { useState } from "react"
import {signIn} from "next-auth/react"

export default function Login(){
    const [data, setData] = useState({
        email: "",
        password: ""
    }
    )

     const loginUser = async (e) => {
                e.preventDefault()
                signIn('credentials',
                 {...data, redirect: false
                })
                .then((callback) => {
                    if (callback?.error) {
                        alert(callback.error)
                    }

                    if(callback?.ok && !callback?.error) {
                        alert('Logged in successfully!')
                    }
                } )
            }
    return(
<div className="min-h-screen bg-purple-400 flex justify-center items-center">
	<div className="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block">
	</div>
	<div className="absolute w-48 h-48 rounded-xl bg-purple-300 -bottom-6 -right-10 transform rotate-12 hidden md:block">
	</div>
    <form onSubmit={loginUser}>
        	<div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
		<div>
			<h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">Login</h1>
			<p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Create an
				account to enjoy all the services without any ads for free!</p>
		</div>
		<div className="space-y-4">
			<input 
            type="email" 
            name="email" 
            autoComplete="email" 
            value={data.email} 
            onChange={(e) => setData({...data, email: e.target.value})}
            required
            placeholder="Email Addres" 
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
			<input type="password" 
            name="password" 
            autoComplete="current-password" 
            value={data.password} 
            onChange={(e) => setData({...data, password: e.target.value})}
            required
            placeholder="Password" 
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
        </div>
			<div className="text-center mt-6">
				<button type="submit" className="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl">Login</button>
				<p className="mt-4 text-sm">Already Have An Account? <span className="underline cursor-pointer"> Sign In</span>
				</p>
			</div>
		</div>
        </form>

		<div className="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
		<div
			className="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block">
		</div>
	</div>)
}