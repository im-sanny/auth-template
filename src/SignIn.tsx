import { FaLaptop } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLock } from "react-icons/md";

function App() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 justify-center items-center my-auto w-full h-full max-w-sm mx-auto overflow-hidden bg-white border-2 dark:bg-gray-800 lg:max-w-2xl">

                {/* text part */}
                <div className="order-2 lg:order-1 bg-cover p-8">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-2xl font-bold text-center mb-6 w-full">
                            Join the Club
                        </p>
                        <p className="text-sm text-start text-gray-600 dark:text-gray-200 w-full mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
                        </p>
                        {/* Info Boxes */}
                        <div className="space-y-6 w-full max-w-md">
                            <div className="flex items-center gap-4">
                                <div className="border rounded-lg p-3 border-black">
                                    <FaLaptop className="w-6 h-6 text-gray-400 dark:text-gray-500" />
                                </div>
                                <div className="text-left">
                                    <p className="text-lg font-bold">Community</p>
                                    <p className="text-sm text-gray-500">At vero eos et accusamus et.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="border rounded-lg p-3 border-black">
                                    <FaLaptop className="w-6 h-6 text-gray-400 dark:text-gray-500" />
                                </div>
                                <div className="text-left">
                                    <p className="text-lg font-bold">Networking</p>
                                    <p className="text-sm text-gray-500">At vero eos et accusamus et.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="border rounded-lg p-3 border-black">
                                    <FaLaptop className="w-6 h-6 text-gray-400 dark:text-gray-500" />
                                </div>
                                <div className="text-left">
                                    <p className="text-lg font-bold">Growth</p>
                                    <p className="text-sm text-gray-500">At vero eos et accusamus et.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* form */}
                <div className="order-1 lg:order-2 w-full px-6 py-8 md:px-8 bg-blue-200">
                    <div className="flex justify-center mx-auto">
                        <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="" />
                    </div>
                    <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
                        Welcome back!
                    </p>
                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
                        <p className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">
                            Join in need of Humanity
                        </p>
                        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                    </div>

                    <div className="relative flex items-center mt-6">
                        <span className="absolute">
                            <HiOutlineMail className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"></HiOutlineMail>
                        </span>

                        <input type="email" className="block w-full py-2 text-gray-700 bg-white border rounded-full px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
                    </div>

                    <div className="relative flex items-center mt-4">
                        <span className="absolute">
                            <MdOutlineLock className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
                        </span>

                        <input type="password" className="block w-full px-10 py-2 text-gray-700 bg-white border rounded-full dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
                    </div>
                    <div className="flex justify-between mt-4">
                        <div className="flex gap-2">
                            <input
                                id="rememberMe"
                                type="checkbox"
                                className="w-4 h-4 rounded"
                            />
                            <label
                                htmlFor="rememberMe"
                                className="text-xs text-gray-600 dark:text-gray-200"
                            >
                                Remember me
                            </label>
                        </div>
                        <a href="#" className="text-xs text-gray-500 dark:text-gray-300 hover:underline">Forget Password?</a>
                    </div>

                    <div className="mt-4">
                        <button className="w-full px-4 py-[10px] text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-gray-800 rounded-full hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                            Sign In
                        </button>
                    </div>

                    <div className="">
                        <a href="#" className="flex items-center justify-center mt-4 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-gray-800 rounded-full hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                            <div className="px-4 py-2">
                                <svg className="w-6 h-6" viewBox="0 0 40 40">
                                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                    <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                    <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                                </svg>
                            </div>
                            <span className="w-5/6 px-4 py-2 font-bold text-center">Sign in with Google</span>
                        </a>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                        <a href="#" className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or sign up</a>
                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default App;
