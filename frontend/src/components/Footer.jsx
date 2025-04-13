import logo_dark from '../assets/images/logo-dark.png'

const Footer = () => {
    return (
        <footer
            className="bg-gradient-to-r from-blue-900 to-blue-600 dark:from-[#0a1b70] dark:to-[#0f2cb0] text-white py-4 px-6 rounded-t-2xl shadow-md flex justify-between items-center">
            <div className="text-sm">© 2025 PetLink</div>

            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                    <img src={logo_dark}
                        alt="PetLink Logo Dark"
                        className="w-[142px] h-[41px] object-contain block"
                    />
                </div>
                <svg width="32" height="25" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.4654 21.3912C33.4654 21.3912 33.1558 23.813 32.2011 24.8806C30.9927 26.2797 29.637 26.2854 29.0174 26.3695C24.5696 26.7236 17.8976 26.7236 17.8976 26.7236H17.8825C17.8825 26.7236 11.2106 26.7236 6.76271 26.3695C6.14315 26.2853 4.78761 26.2797 3.579 24.8806C2.62432 23.813 2.3147 21.3912 2.3147 21.3912C2.3147 21.3912 2 18.548 2 15.6992V13.0303C2 10.1872 2.31999 7.34394 2.31999 7.34394C2.31999 7.34394 2.62964 4.92207 3.58429 3.85447C4.79269 2.45536 6.38201 2.50026 7.08774 2.35411C9.62645 2.08421 17.8927 2 17.8927 2C17.8927 2 24.5697 2.01116 29.0176 2.36526C29.6372 2.44947 30.9927 2.45504 32.2013 3.85416C33.156 4.92176 33.4656 7.34363 33.4656 7.34363C33.4656 7.34363 33.7856 10.1868 33.7856 13.03V15.6989C33.7853 18.5479 33.4654 21.3912 33.4654 21.3912ZM14.6126 9.80492V19.683L23.1987 14.7272L14.6126 9.80492Z" stroke="white" stroke-width="3" stroke-miterlimit="10"/>
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g mask="url(#mask0_246_78)">
                        <path d="M12 2.16093C15.2063 2.16093 15.586 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0735 2.64375C19.6313 2.85938 20.0344 3.12188 20.4515 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.511 5.33905 21.7078 5.97655 21.7594 7.14375C21.8156 8.40935 21.8297 8.78905 21.8297 11.9907C21.8297 15.1969 21.8156 15.5765 21.7594 16.8375C21.7078 18.0094 21.511 18.6422 21.3469 19.0641C21.1313 19.6219 20.8687 20.025 20.4515 20.4422C20.0297 20.864 19.6313 21.1219 19.0735 21.3375C18.6516 21.5015 18.0141 21.6985 16.8469 21.75C15.5813 21.8062 15.2015 21.8203 12 21.8203C8.79375 21.8203 8.41405 21.8062 7.15315 21.75C5.98125 21.6985 5.34845 21.5015 4.92657 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48907 18.6422 2.29219 18.0047 2.24062 16.8375C2.18437 15.5719 2.17032 15.1922 2.17032 11.9907C2.17032 8.7844 2.18437 8.4047 2.24062 7.14375C2.29219 5.97185 2.48907 5.33905 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92657 2.64375C5.34845 2.47969 5.98595 2.28281 7.15315 2.23125C8.41405 2.175 8.79375 2.16093 12 2.16093ZM12 0C8.7422 0 8.3344 0.0140625 7.0547 0.0703125C5.7797 0.126563 4.90313 0.332813 4.14375 0.628125C3.35157 0.9375 2.68125 1.34531 2.01562 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332813 4.90312 0.126563 5.775 0.0703125 7.05C0.0140625 8.33435 0 8.7422 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332813 19.0969 0.628125 19.8563C0.9375 20.6485 1.34531 21.3188 2.01562 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90312 23.6625 5.775 23.8687 7.05 23.925C8.3297 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.661 23.9812 16.9407 23.925C18.2157 23.8687 19.0922 23.6625 19.8515 23.3672C20.639 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0532 20.6485 23.3578 19.861C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.986 15.2625 23.986 12.0047C23.986 8.7469 23.9719 8.33905 23.9156 7.0594C23.8594 5.7844 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6485 0.9375 19.861 0.63281C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6657 0.0140625 15.2578 0 12 0Z" fill="white"/>
                        <path d="M12 5.83594C8.59689 5.83594 5.83594 8.59689 5.83594 12C5.83594 15.4031 8.59689 18.164 12 18.164C15.4031 18.164 18.164 15.4031 18.164 12C18.164 8.59689 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00154 14.2078 8.00154 12C8.00154 9.79219 9.79219 8.00154 12 8.00154C14.2078 8.00154 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z" fill="white"/>
                        <path d="M19.8468 5.5919C19.8468 6.3888 19.2 7.03095 18.4078 7.03095C17.611 7.03095 16.9688 6.3841 16.9688 5.5919C16.9688 4.79502 17.6157 4.15283 18.4078 4.15283C19.2 4.15283 19.8468 4.79971 19.8468 5.5919Z" fill="white"/>
                    </g>
                </svg>
                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.6667 8.5L10.7778 13.5L18.1111 21L23 1L1 9.75L5.88889 12.25L8.33333 19.75L12 14.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29 13.5825C29 6.08109 22.5081 0 14.5 0C6.49187 0 0 6.08109 0 13.5825C0 20.3618 5.30241 25.981 12.2344 27V17.5087H8.55273V13.5825H12.2344V10.5901C12.2344 7.18599 14.3992 5.30567 17.7112 5.30567C19.2972 5.30567 20.957 5.57095 20.957 5.57095V8.91352H19.1287C17.3275 8.91352 16.7656 9.96059 16.7656 11.0358V13.5825H20.7871L20.1442 17.5087H16.7656V27C23.6976 25.981 29 20.3618 29 13.5825Z" fill="white"/>
                </svg>
            </div>
        </footer>
    )
}

export default Footer;
