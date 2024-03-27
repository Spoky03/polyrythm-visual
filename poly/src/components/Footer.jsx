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
            <footer className='bg-slate-900 text-gray-400 text-center py-5'>
                <div className='container mx-auto px-4'>
                    <div className='flex flex-wrap justify-center gap-5'>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/contact'>Contact</Link>
                        <Link className="flex gap-1" to='https://github.com/Spoky03'> <FaGithub className="place-self-center" />Github</Link>
                    </div>
                    <p className='mt-4'>© {year} Stefan Grzelec</p>
                </div>
            </footer>
        </>
    );
}