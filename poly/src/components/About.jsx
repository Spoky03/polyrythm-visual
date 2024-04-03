import { SiGmail } from "react-icons/si";

export const About = () => {
    return (
        <div className='flex flex-col gap-4 mt-20 w-96'>
            <h3 className='text-2xl text-center'>About</h3>
            <p className=''>Polyrhythms are rhythms that are not multiples of each other. This app allows you to create and play polyrhythms.</p>
            
            <h3 className='text-2xl text-center'>How to use</h3>
            <p className=''>You can add up to 5 rhythms. Each rhythm has a number and a color. You can change the number by clicking on it and typing a new number. You can change the color by clicking on the color picker. You can remove a rhythm by clicking on the X button.</p>
            
            <h3 className='text-2xl text-center'>Contact</h3>
            <div className="sm:inline-flex hidden justify-center"><SiGmail className="place-self-center mr-1" size={15} />stefangrzelec@gmail.com</div>

        </div>
    )
}