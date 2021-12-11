import axios from "axios";
import React, { useState, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Container, Alert, Table,Image} from 'react-bootstrap';

function App() {
  const [pokemon, setPokemon] = useState('pikachu');
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");

  const getPokemon = async() =>{
    const toArray = [];
    try{
      const baseURL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(baseURL)
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

  //useEffect for default load(pikachu)
    useEffect(() => {
      getPokemon()
  },[]);

  return (
    <div class = 'app__body bg-light'>
      <Form className='bg-danger' onSubmit={handleClick}>
        <Form.Group className="mb-3">
          <Form.Label>
           <Form.Control className='form__input center-block' type="text" onChange={handleChange}  onFocus={(e) => e.target.placeholder = ""}  placeholder="Pikachu" fluid/>
           {/* <button type='submit' onClick={handleClick}>Search</button> */}
          </Form.Label>
          <Alert variant={'danger'}>Enter Pokemon name (e.g Squirtle, Raichu, Blastoise etc)</Alert>
        </Form.Group>
      </Form>
      {pokemonData.map((data)=>{
        return(
          <div className = 'pokemon__container'>
            <Image style={{height:'13.5rem', marginBottom:'2rem'}} src={data.sprites["front_default"]} alt="Pikachu" thumbnail/>
            <Table striped bordered hover >
              {/*<div className="divTableBody"></div>*/}
              <tbody>
                <tr>
                  <th>Type</th>
                  <th>{pokemonType}</th>
                </tr>
                <tr>
                  <th>Height</th>
                  <th>{data.height}</th>
                </tr>
                <tr>
                  <th>Weight</th>
                  <th>{data.weight}</th>
                </tr>
                <tr>
                  <th>Number of Battle</th>
                  <th>{data.game_indices.length}</th>
                </tr>
              </tbody>
            </Table>
          </div>
        )
      })}

     {/* <img className='background__spiral' src="https://sg.portal-pokemon.com/play/resources/pokedex/img/pokemon_list_bg.png" alt="" /> */}
    
    </div>
  );
}

export default App;
