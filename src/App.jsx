import React, { useState} from 'react';
import './App.css';
import SearchInput from './components/SearchInput';
import PokemonList from './components/PokemonList';

const URL_PATH = "https://gist.githubusercontent.com/bar0191/fae6084225b608f25e98b733864a102b/raw/dea83ea9cf4a8a6022bfc89a8ae8df5ab05b6dcc/pokemon.json";

const App = () => {
    const [value, setValue] = useState("");
    const [ list, setList ] = useState([]);

    return(
        <>
        
    <label htmlFor="maxCP" className="max-cp">
        <input type="checkbox" id="maxCP" />
        <small>
            Maximum Combat Points
        </small>
    </label>
    <SearchInput list={list} setList={setList} value={value} setValue={setValue}/>
    {/* <input type="text" className="input" placeholder="Pokemon or type" />
    <div className="loader"></div> */}

    {(list.length===0)? <h1 className='no-results'>No results</h1>:<PokemonList list={list} value={value}/>}
    
</>
    )
};

export default App;
