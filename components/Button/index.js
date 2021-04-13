export default function Button ( {children, onClick} ) {
    return( 
        <>
            <button onClick={onClick} className="flex items-center bg-black text-white py-2 px-4 rounded-full gap-3 hover:bg-white hover:text-black transition duration-300 ease-in-out transform hover:translate-y-1 focus:outline-none">
                {children}
            </button>
        </>
    )
}