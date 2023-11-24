
function Button({children}) {
    
    return(
        <button className='bg-[#0BB489] border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-[#0BB489] hover:border-[#0BB489] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
        {children}
      </button>
    )
}

export default Button;