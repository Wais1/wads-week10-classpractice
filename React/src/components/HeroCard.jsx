import React from 'react'

function HeroCard({name, alias}) {
  return (

        <div className='card'>
            <div className='title'>
                <p className='subtitle'>Name</p>
                <p className='name'>{name}</p>
            </div>
            <div className='title'>
                <p className='subtitle'>Alias</p>
                <p className='name'>{alias}</p>
            </div>
        </div>

  )
}

export default HeroCard