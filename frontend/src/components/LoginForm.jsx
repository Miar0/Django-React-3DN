import CheckboxWithLabel from '../components/CheckboxWithLabel'

const LoginForm = () => {
    return (
        <form className="space-y-6 py-9 px-18 w-full text-white">
            <div className="relative">
                <label className="block mb-1 text-black dark:text-white">Email</label>

                <input
                    type="email"
                    className="w-full pl-4 py-2 rounded-md bg-[#D9D9D9]/20 placeholder-white/50 focus:outline-none
                    ring ring-[#00000026] dark:ring-0"
                    placeholder="example@gmail.com"
                />

                <div className="absolute top-8 right-1 pointer-events-none">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="32" height="32" rx="10" fill="black" fill-opacity="0.4"/>
                        <path
                            d="M15.9936 17.2931C16.8814 17.2931 17.782 17.267 18.6699 17.2931C19.9763 17.3453 21.1179 18.2988 21.4604 19.6049C21.5365 19.8792 21.5618 20.1796 21.5745 20.48C21.5999 20.898 21.5745 21.329 21.5745 21.76C21.5745 22.1388 21.3082 22.4131 20.953 22.4131C20.6105 22.4131 20.3315 22.1388 20.3188 21.7731C20.3188 21.3682 20.3188 20.9502 20.3188 20.5453C20.3188 19.4221 19.5324 18.5992 18.4416 18.5861C16.7927 18.5731 15.1437 18.5731 13.4948 18.5861C12.5181 18.5861 11.7825 19.2653 11.6429 20.2449C11.6049 20.5453 11.6303 20.8457 11.6303 21.1461C11.6303 21.3421 11.6303 21.551 11.6303 21.747C11.6303 22.1388 11.3512 22.4261 10.9961 22.4261C10.6663 22.4 10.3999 22.1127 10.3999 21.7339C10.3999 21.2898 10.3999 20.8327 10.3999 20.3886C10.4126 18.8996 11.5795 17.5282 13.0128 17.3323C13.2284 17.3061 13.4441 17.2931 13.647 17.2931C14.4334 17.28 15.2198 17.28 15.9936 17.2931Z"
                            fill="white" fill-opacity="0.4"/>
                        <path
                            d="M15.9933 9.60001C17.7057 9.60001 19.1136 11.0367 19.1136 12.8C19.1136 14.5633 17.7183 16 15.9933 16C14.281 16 12.873 14.5633 12.873 12.8C12.8857 11.0367 14.281 9.60001 15.9933 9.60001ZM15.9933 10.88C14.9659 10.88 14.1288 11.742 14.1288 12.7869C14.1288 13.8449 14.9532 14.7069 15.9806 14.7069C17.0207 14.7069 17.8579 13.858 17.8579 12.7869C17.8579 11.742 17.0207 10.8931 15.9933 10.88Z"
                            fill="white" fill-opacity="0.4"/>
                    </svg>
                </div>
            </div>


            <div className="relative">
                <label className="block mb-1 text-black dark:text-white">Password</label>
                <input
                    type="password"
                    className="w-full pl-4 py-2 rounded-md bg-[#D9D9D9]/20 placeholder-white/50 focus:outline-none
                    ring ring-[#00000026] dark:ring-0"
                    placeholder="Your Password"
                />
                <div className="absolute top-10 right-2">
                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20.2701 9.26768L20.3761 9.04865L20.2691 8.83013C18.5355 5.2895 14.9818 3.05 11 3.05C10.371 3.05 9.76397 3.12235 9.1763 3.22919L8.31666 2.36955C9.17764 2.16073 10.0748 2.05 11 2.05C15.7173 2.05 19.7581 4.94115 21.4609 9.05044C20.8581 10.5112 19.9573 11.8095 18.8342 12.8871L18.1352 12.1881C18.9997 11.3645 19.7302 10.3842 20.2701 9.26768ZM14.99 9.03798V9.04C14.99 9.04096 14.99 9.04193 14.99 9.04289L13.6969 7.74981C13.403 7.13586 12.9041 6.63703 12.2902 6.34308L10.9971 5.05C10.9981 5.05 10.999 5.05 11 5.05C13.2057 5.05 14.9989 6.83754 14.99 9.03798ZM2.42115 0.708459L19.443 17.7399L18.74 18.4429L15.6736 15.3764L15.4414 15.1443L15.1361 15.265C13.8538 15.7722 12.4561 16.05 11 16.05C6.28261 16.05 2.24178 13.1587 0.538996 9.0493C1.28272 7.2424 2.48758 5.67997 3.9988 4.49324L4.44218 4.14507L4.04355 3.74645L1.71586 1.41875L2.42115 0.708459ZM8.86355 8.56645L8.01 7.71289V8.91357C8.00977 8.91558 8.00941 8.91863 8.00886 8.92298L8.00849 8.92595C8.00579 8.94736 8 8.99337 8 9.05C8 10.7061 9.34386 12.05 11 12.05C11.1046 12.05 11.1991 12.0258 11.2344 12.0168C11.237 12.0161 11.2393 12.0156 11.2413 12.0151L12.098 11.8009L11.4736 11.1764L8.86355 8.56645ZM5.46355 5.16645L5.15487 4.85777L4.80737 5.12198C3.54084 6.08496 2.4681 7.32421 1.73092 8.83017L1.6233 9.05002L1.73094 9.26987C3.46448 12.8105 7.01821 15.05 11 15.05C11.9994 15.05 12.9638 14.9027 13.8816 14.6524L14.7128 14.4257L14.1036 13.8164L13.1236 12.8364L12.8848 12.5977L12.5741 12.73C12.0944 12.9343 11.5609 13.05 11 13.05C8.79614 13.05 7 11.2539 7 9.05C7 8.48959 7.11551 7.95498 7.32129 7.4629L7.45066 7.15355L7.21355 6.91645L5.46355 5.16645Z"
                            fill="#0C0C0C" stroke="#404040"/>
                    </svg>
                </div>
            </div>

            <div className="flex flex-row items-center justify-between text-sm">
                <label className="flex items-center justify-center space-x-2">
                    {/*<div className="flex items-center ring ring-[#00000026] dark:ring-white rounded-xs h-3 w-3">*/}
                    {/*    <input*/}
                    {/*        type="checkbox"*/}
                    {/*        className="h-3 w-3 invisible checked:visible"*/}
                    {/*    />*/}
                    {/*</div>*/}
                    <div className="flex items-center justify-center ">
                        <CheckboxWithLabel/>
                    </div>
                    <span
                        className="text-md text-black dark:text-white">
                        Запам'ятати мене
                    </span>
                </label>

                <button
                    type="button"
                    className="font-medium text-md text-[#0037FF] hover:underline"
                >
                    Забули пароль?
                </button>
            </div>

            <button
                type="submit"
                className="w-full bg-blue-700 p-2 rounded-lg my-8 text-white hover:bg-blue-800 transition hover:cursor-pointer"
            >
                Увійти
            </button>

            <div className="flex items-center justify-center">
                <span className="border-t w-12 dark:text-white text-black"></span>
                <p className="mx-3 dark:text-white text-black">Або авторизуватися через</p>
                <span className="border-t w-12 dark:text-white text-black"></span>
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
                <p className="text-sm font-light dark:text-white text-black">
                    Немає облікового запису?{" "}
                    <button
                        className="text-[#0037FF] hover:underline hover:cursor-pointer"
                    >
                        Авторизуватися
                    </button>
                </p>
            </div>

        </form>
    )
}

export default LoginForm
