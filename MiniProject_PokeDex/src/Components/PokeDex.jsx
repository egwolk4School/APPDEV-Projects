import React,{useState, useEffect} from 'react'
import axios from 'axios'
import PokemonList from './PokemonList'
import Pagination from './Pagination'
import './PokemonList.css'
export default function PokeDex() {
    const [pokemon, setPokemon] = useState([])
    const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon')
    const [nextPage, setNextPage] = useState()
    const [prevPage, setPrevPage] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setLoading(true)
        let cancel
        axios.get(currentPage,{
            cancelToken: new axios.CancelToken(c=>cancel=c)
        }).then(res=>{
            setLoading(false)
            setNextPage(res.data.next)
            setPrevPage(res.data.previous)
            const pokemonPromises = res.data.results.map(p => 
                axios.get(p.url).then(detailRes => ({
                    name: p.name,
                    sprite: detailRes.data.sprites.front_default,
                }))
            )
            return Promise.all(pokemonPromises);
        }).then(pokemonData => {
            setPokemon(pokemonData);
            setLoading(false);
        }).catch(err => {
            if (axios.isCancel(err)) return; 
            console.error(err);
            setLoading(false);
        })
        
        return()=>cancel()
    },[currentPage])
    const goNext=()=>setCurrentPage(nextPage)
    const goPrev=()=>setCurrentPage(prevPage)
    if(loading) return "loading..."
  return (
    <>
    <Pagination
    goNext={nextPage?goNext:null}
    goPrev={prevPage? goPrev:null}
    />
    <div className="dex">
    <PokemonList pokemon={pokemon}/>
    </div>
    </>
  )
}
