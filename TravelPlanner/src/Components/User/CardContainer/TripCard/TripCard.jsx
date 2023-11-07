import React from 'react'

const TripCard = () => {
    return (
        <div className="w-[50vw] bg-primary min-h-[30px] rounded p-3">
            <div className='flex gap-2'>
                <h1>Tripname:</h1> <h1>Name</h1>
            </div>


            <div className='flex gap-2'>
                <h1>Destiny:</h1> <h1>Destino</h1>
            </div>
            <div className='flex gap-2'>
                <h1>Country: </h1> <h1>Pais</h1>
            </div>
            <div className='flex gap-2'>
                <h1>Description:</h1> <h1>Descripción Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam beatae, minus vero, velit possimus dolorum id incidunt corrupti neque omnis laborum delectus vitae officiis corporis nostrum fugit adipisci et sapiente a molestias iusto! Laboriosam architecto dolorum eius ad, blanditiis hic.</h1>
            </div>
            <div className='flex gap-2'>
                <h1>place of stay:</h1> <h1>Hotel</h1>
            </div>

        </div>
    )
}

export default TripCard