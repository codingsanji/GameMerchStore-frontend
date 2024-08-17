import React from 'react';

const RegJoin = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 overflow-hidden">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 -mt-12"> {/* Adjusted margin-top */}
                <h1 className="text-4xl font-bold text-center text-gray-700 -ml-5 md:-ml-7 pb-1">Sign Up</h1>
                <div className="flex flex-col justify-center space-y-6">
                    <div className="w-full space-y-4">
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <input 
                            type="text" 
                            placeholder="Email Address" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                    <button 
                        className="w-full bg-purple-600 text-white font-bold py-2 rounded-md hover:bg-purple-700 transition duration-200"
                    >
                        Continue
                    </button>
                    <p className="text-center text-gray-600">
                        Already have an account? <span className="text-purple-600 hover:underline cursor-pointer">Login here</span>.
                    </p>
                    <div className="flex items-center mt-4">
                        <input 
                            type="checkbox" 
                            id="agree" 
                            className="w-4 h-4 text-purple-600 focus:ring-0 border-gray-300 rounded"
                        />
                        <label htmlFor="agree" className="ml-2 text-gray-600">
                            By continuing, I agree to the <span className="text-purple-600 hover:underline cursor-pointer">terms of use</span> & <span className="text-purple-600 hover:underline cursor-pointer">privacy policy</span>.
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegJoin;