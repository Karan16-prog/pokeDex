import axios from "axios";
import React, { useState, useEffect } from "react";
import './App.css';


function App() {
  const [pokemon, setPokemon] = useState('pikachu');
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");

  const getPokemon = async() =>{
    const toArray = [];
    try{
      const baseURL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res= await axios.get(baseURL)
      toArray.push(res.data);
      setPokemonData(toArray);
      //console.log(toArray[0].types[0].type.name);
      setPokemonType(toArray[0].types[0].type.name);
    }
    catch(e){
      console.log(e);
    }
  }

  function handleChange(event){
    setPokemon(event.target.value.toLowerCase());
  }
  
  function handleClick(e){
    e.preventDefault();
    getPokemon()
    console.log(pokemonData);
  }

  //useEffect for default load
    useEffect(() => {
    // Update the document title using the browser API
      getPokemon()
  },[]);

  return (
    <div class = 'app__body'>
      <form onSubmit={handleClick}>
        <label>
          <input type="text" onChange={handleChange} placeholder="Pikachu"/>
         {/* <button type='submit' onClick={handleClick}>Search</button> */}
        </label>
        <p>Enter Pokemon name (e.g Squirtle, Raichu, Blastoise etc)</p>
      </form>
      {pokemonData.map((data)=>{
        return(
          <div className = 'pokemon__container'>
            <img src={data.sprites["front_default"]} alt="" />
            <div className="divTable">
              <div className="divTableBody">
                <div className="divTableRow">
                  <div className="divTableCell">Type</div>
                  <div className="divTableCell">{pokemonType}</div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Height</div>
                  <div className="divTableCell">{data.height}</div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Weight</div>
                  <div className="divTableCell">{data.weight}</div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Number of Battle</div>
                  <div className="divTableCell">{data.game_indices.length}</div>
                </div>
              </div>
            </div>
            
          </div>
        )
      })}  
     {/* <img className='background__spiral' src="https://sg.portal-pokemon.com/play/resources/pokedex/img/pokemon_list_bg.png" alt="" /> */}
    
    </div>
  );
}

export default App;
