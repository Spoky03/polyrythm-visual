
export const RouteNotFound = () => {
    return (
        <div className='flex flex-col gap-4 mt-20'>
            <h3 className='text-2xl text-center'>Page Not Found</h3>
            <p className='text-center'>The page you are looking for does not exist.</p>
            <img src='https://i.pinimg.com/236x/84/40/67/8440672570606101d11bd67bf998af5b.jpg' alt='404' width={300} height={300} className="rounded-2xl" />
        </div>
    )
}