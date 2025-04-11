const RegisterForm = () => {
    return (
        <form className="space-y-6 py-9 px-18 w-full text-white">
            <h2 className="text-2xl font-semibold mb-7">Створіть свій акаунт</h2>
            <div>
                <label className="block mb-1">First Name</label>
                <input
                    className="w-full px-4 py-2 rounded-md bg-[#D9D9D9]/20 placeholder-white/50 focus:outline-none"
                    placeholder="Anna"/>
            </div>
            <div>
                <label className="block mb-1">Last Name</label>
                <input
                    className="w-full px-4 py-2 rounded-md bg-[#D9D9D9]/20 placeholder-white/50 focus:outline-none"
                    placeholder="Last Name"/>
            </div>
            <div>
                <label className="block mb-1">Email</label>
                <input type="email"
                       className="w-full px-4 py-2 rounded-md bg-[#D9D9D9]/20 placeholder-white/50 focus:outline-none"
                       placeholder="Email"/>
            </div>
            <h2 className="text-2xl font-semibold mb-6 mt-9">Password</h2>
            <div className="mb-10 space-y-3">
                <input type="password" className="w-full px-4 py-2 rounded-md bg-white/60 focus:outline-none"
                       placeholder="Your Password"/>

                <input type="password" className="w-full px-4 py-2 rounded-md bg-white/60 focus:outline-nonee"
                       placeholder="Confirm Password"/>
            </div>
            <button type="submit"
                    className="btn-primary w-full bg-blue-700 p-2 outline-none rounded-lg cursor-pointer">Confirm
            </button>

            <div className="flex items-center justify-center">
                <span className="border-t w-12"></span>
                <p className="mx-3">Або авторизуватися через</p>
                <span className="border-t w-12"></span>
            </div>

            <div className="flex items-center justify-center my-10">
                <a href="#" className="mr-4 hover:cursor-pointer">
                    <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_106_367)">
                            <path
                                d="M18.4998 14.7272V21.6982H28.187C27.7616 23.94 26.4851 25.8382 24.5706 27.1146L30.4124 31.6473C33.816 28.5056 35.7797 23.891 35.7797 18.4092C35.7797 17.1329 35.6651 15.9055 35.4524 14.7274L18.4998 14.7272Z"
                                fill="#4285F4"/>
                            <path
                                d="M8.41192 21.426L7.09438 22.4346L2.43066 26.0673C5.39247 31.9417 11.4629 36 18.4992 36C23.3591 36 27.4336 34.3963 30.4119 31.6473L24.5701 27.1146C22.9664 28.1946 20.921 28.8492 18.4992 28.8492C13.8193 28.8492 9.84302 25.691 8.41928 21.4364L8.41192 21.426Z"
                                fill="#34A853"/>
                            <path
                                d="M2.43077 9.93274C1.20356 12.3545 0.5 15.0872 0.5 17.9999C0.5 20.9126 1.20356 23.6454 2.43077 26.0671C2.43077 26.0833 8.41996 21.4198 8.41996 21.4198C8.05996 20.3398 7.84718 19.1944 7.84718 17.9997C7.84718 16.805 8.05996 15.6596 8.41996 14.5796L2.43077 9.93274Z"
                                fill="#FBBC05"/>
                            <path
                                d="M18.4996 7.16727C21.1506 7.16727 23.5069 8.08361 25.3887 9.8509L30.5432 4.69642C27.4177 1.78375 23.3597 0 18.4996 0C11.4633 0 5.39247 4.04181 2.43066 9.93274L8.41967 14.58C9.84322 10.3254 13.8196 7.16727 18.4996 7.16727Z"
                                fill="#EA4335"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_106_367">
                                <rect width="36" height="36" fill="white" transform="translate(0.5)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </a>
                <a href="#" className="ml-4 hover:cursor-pointer">
                    <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_106_368)">
                            <path
                                d="M36.5 18C36.5 8.05887 28.4411 0 18.5 0C8.55887 0 0.5 8.05887 0.5 18C0.5 26.9842 7.0823 34.431 15.6875 35.7813V23.2031H11.1172V18H15.6875V14.0344C15.6875 9.52313 18.3748 7.03125 22.4864 7.03125C24.4551 7.03125 26.5156 7.38281 26.5156 7.38281V11.8125H24.2459C22.01 11.8125 21.3125 13.2001 21.3125 14.625V18H26.3047L25.5066 23.2031H21.3125V35.7813C29.9177 34.431 36.5 26.9842 36.5 18Z"
                                fill="#1877F2"/>
                            <path
                                d="M25.5066 23.2031L26.3047 18H21.3125V14.625C21.3125 13.2015 22.01 11.8125 24.2459 11.8125H26.5156V7.38281C26.5156 7.38281 24.4558 7.03125 22.4864 7.03125C18.3748 7.03125 15.6875 9.52313 15.6875 14.0344V18H11.1172V23.2031H15.6875V35.7813C17.5512 36.0729 19.4488 36.0729 21.3125 35.7813V23.2031H25.5066Z"
                                fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_106_368">
                                <rect width="36" height="36" fill="white" transform="translate(0.5)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </a>
            </div>

            <div className="flex items-center justify-center">
                <p className="text-sm font-light text-white">
                    Вже є обліковий запис?{" "}
                    <button
                        className="text-blue-500 hover:underline hover:cursor-pointer"
                    >
                        Увійти
                    </button>
                </p>
            </div>
        </form>
    )
}

export default RegisterForm
