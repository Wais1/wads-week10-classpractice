import React from 'react'

function HeroCard({name, alias}) {
  return (
    <div className='container'>
        <div className='card'>
            <p> <span className='subtitle'>Name: </span>{name}</p>
            <p><span className='subtitle'>Alias: </span> {alias}</p>
        </div>
    </div>
  )
}

export default HeroCard