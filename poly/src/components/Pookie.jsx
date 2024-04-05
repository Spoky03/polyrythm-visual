import { useState } from "react";
export const Pookie = () => {

    const [negatywy, setNegatywy] = useState([])

    const handleNegatywy = (e) => {
        setNegatywy(e.target.value)
    }

    const [negatywyList, setNegatywyList] = useState([])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setNegatywyList([...negatywyList, negatywy])
    }
    return (
        <div className='flex flex-col gap-6 mt-20 w-96'>
            <div className="flex flex-col">
                <img src="https://media4.giphy.com/media/3oxHQfvDzo7VhSRy8M/giphy.gif?cid=6c09b9523bzcx7j0nfrsp7kirknfhf80ma9tfhm4796vzam2&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Pookie" className="rounded-xl place-self-center justify-center w-1/2" />
            </div>

            <div>
                <h3 className='text-2xl text-center text-purple-600'>POOKIE prosze zagraj w valoranta</h3>
                <div className="  rounded-xl p-5 min-h-fit text-center">
                    <p>korzyści</p>
                    <ul className='list-disc list-inside'>
                        <li className='text-lg'>stefik będzie szczęśliwy</li>
                        <li className='text-lg'>spędzimy razem czas</li>
                        <li className='text-lg'>podszkolę cię w gre (kołczing)</li>
                        <li className='text-lg'>Pookie postrzela</li>
                        <li className='text-lg'>❤❤❤</li>
                        <li className='text-lg'>valorant wojownicy to my</li>
                    </ul>
                    <p className="my-5">negatywy</p>
                    <input type="text" value={negatywy} onChange={handleNegatywy} className='rounded-xl p-2 w-1/2 text-gray-900 place-self-center' onSubmit={handleSubmit} />
                    <button className='rounded-xl p-2 bg-purple-600 text-gray-900' onClick={handleSubmit}>Dodaj</button>
                    <ul className='list-disc list-inside'>
                        {negatywyList.map((negatywy, index) => (
                            <li key={index} className='text-lg'>{negatywy}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex flex-col">
                <img src="https://i.pinimg.com/originals/24/ac/4d/24ac4dadc09cc131dfb30abc71d4350f.gif" alt="Pookie" className="rounded-xl place-self-center justify-center mb-10 w-1/2" />
            </div>

        </div>
    )
}