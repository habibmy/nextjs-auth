'use client'

import { useState } from "react"
import axios from "axios"

export default function Register() {
    const [data, setData] = useState({
         name: '',
          email: '',
           password: ''
         })

         const registerUser = async (e) => {
            e.preventDefault()
            axios.post('/api/register', data)
            .then(() => alert('User has been registered!'))
            .catch(() => alert('Something went wrong!'))
         }

    return (
      <>
<div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <form onSubmit={registerUser}>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="name"
                        placeholder="Name"
                        value={data.name}
                        onChange={(e) => setData({...data, name: e.target.value})} />

                    <input 
                        type="email"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email"
                        required
                        autoComplete="email"
                        value={data.email}
                        onChange={(e) => setData({...data, email: e.target.value})} />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password"
                        required 
                        autoComplete="current-password"
                        value={data.password}
                        onChange={(e) => setData({...data, password: e.target.value})} />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-600 focus:outline-none my-1"
                    >Create Account</button>
                    </form>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <a className="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
        </div>
      </>
    )
  }