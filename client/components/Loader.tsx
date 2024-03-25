import React from 'react'

const Loader: React.FC = () => {
    
    return(
        <div className='w-screen h-full flex items-center justify-center bg-black bg-opacity-40 fixed left-0 top-0'>
            <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
                <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...
                </span>
            </div>
        </div>
    )
}

export default Loader
