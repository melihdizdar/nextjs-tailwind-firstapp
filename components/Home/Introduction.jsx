import React from 'react'

function Introduction() {
    return (
        <div className="container mx-auto px-8 text-center">
            <div className='flex'>
                <div className='w-full'>%100</div>
            </div>
            <div className='flex'>
                <div className='w-1/2'>%50</div>
                <div className='w-1/2'>%50</div>
            </div>
            <div className='flex'>
                <div className='w-1/3'>%33</div>
                <div className='w-1/3'>%33</div>
                <div className='w-1/3'>%33</div>
            </div>
            <div className='flex'>
                <div className='w-1/4'>%25</div>
                <div className='w-1/4'>%25</div>
                <div className='w-1/4'>%25</div>
                <div className='w-1/4'>%25</div>
            </div>
        </div>
    )
}

export default Introduction