import { FaLaptop } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail, HiOutlineUser } from "react-icons/hi";
import { MdOutlineLock } from "react-icons/md";

const SignUp = () => {
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
                <div className="w-full max-w-md px-6 py-6 bg-blue-200">
                    <div className="flex justify-center mb-3">
                        <img className="w-auto h-8" src="https://merakiui.com/images/logo.svg" alt="Logo" />
                    </div>
                    <h2 className="mb-3 text-2xl font-bold text-center text-gray-800">
                        Create an Account
                    </h2>
                    <div className="flex items-center justify-between mb-3">
                        <span className="w-1/4 border-b dark:border-gray-600"></span>
                        <p className="text-xs text-center text-gray-500 uppercase">
                            Join our community
                        </p>
                        <span className="w-1/4 border-b dark:border-gray-600"></span>
                    </div>
                    <form>
                        <div className="relative mb-2">
                            <HiOutlineUser className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                className="w-full pl-10 pr-4 py-2 text-gray-700 bg-white border rounded-full focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300"
                                placeholder="Full Name"
                            />
                        </div>

                        <div className="relative mb-2">
                            <HiOutlineMail className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                            <input
                                type="email"
                                className="w-full pl-10 pr-4 py-2 text-gray-700 bg-white border rounded-full focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300"
                                placeholder="Email address"
                            />
                        </div>

                        <div className="relative mb-2">
                            <MdOutlineLock className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                            <input
                                type="password"
                                className="w-full pl-10 pr-4 py-2 text-gray-700 bg-white border rounded-full focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300"
                                placeholder="Password"
                            />
                        </div>

                        <div className="relative mb-2">
                            <MdOutlineLock className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                            <input
                                type="password"
                                className="w-full pl-10 pr-4 py-2 text-gray-700 bg-white border rounded-full focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300"
                                placeholder="Confirm Password"
                            />
                        </div>

                        <div className="flex items-center mb-2">
                            <input type="checkbox" id="terms" className="mr-2 rounded" />
                            <label htmlFor="terms" className="text-sm text-gray-600">
                                I agree to the <a href="#" className="text-blue-500 hover:underline">Terms and Conditions</a>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-gray-800 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
                        >
                            Sign Up
                        </button>
                    </form>

                    <div className="mt-2">
                        <button className="w-full flex items-center justify-center px-4 py-2 text-white bg-gray-800 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50">
                            <FcGoogle className="w-5 h-5 mr-2" />
                            <span>Sign up with Google</span>
                        </button>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                        <span className="w-1/4 border-b dark:border-gray-600"></span>
                        <a href="#" className="text-xs text-gray-500 uppercase hover:underline">
                            or sign in
                        </a>
                        <span className="w-1/4 border-b dark:border-gray-600"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;