import { FaGithub } from "react-icons/fa";
const Link = ({ to, ...rest }) => {
    return (
        <div className="">
        <a href={to} {...rest}></a>
        </div>
    );
}


export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <>
            <footer className='bg-slate-200 text-slate-900 dark:bg-slate-900 dark:text-gray-300 text-center py-5 w-screen min-w-full'>
                <div className='container mx-auto px-4'>
                    <div className='flex flex-wrap justify-center xl:gap-10 md:gap-7 gap-4'>
                        <Link to='/about'>About</Link>
                        <Link className="flex gap-1" to='https://github.com/Spoky03'> <FaGithub className="place-self-center" />Github</Link>
                    </div>
                    <p className='mt-4'>© {year} Stefan Grzelec</p>
                </div>
            </footer>
        </>
    );
}