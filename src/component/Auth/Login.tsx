

const Login = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center" >
        <div className="border-2 border-green-500 rounded-3xl">
            <form className="border-none flex flex-col items-center justify-center p-20 border-2 rounded">
                <input required className='bg-white border-2 rounded-full py-3 px-7 text-xl text-black outline-none border-green-500 mb-5 placeholder:text-gray-400 font-semibold'  type="email" placeholder="Enter your email" />
                <input required className='bg-white border-2 rounded-full py-3 px-7 text-xl text-black outlin5-none border-green-500 placeholder:text-gray-400 font-semibold'  type="password" placeholder="Enter password" />
                <button className="bg-green-500 py-3 px-30 text-xl mt-10 text-white font-semibold border-none border-2 rounded-full ">Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login