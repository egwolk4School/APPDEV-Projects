import React from 'react'

export default function PokemonList({pokemon}) {
  return (
    <div>
      {pokemon.map(p=>(
        <a href='#'>
            <div key={p.name} className='card'>
                <img src={p.sprite} /><br />
                {p.name}
            </div>
        </a>
      ))}
    </div>
  )
}
