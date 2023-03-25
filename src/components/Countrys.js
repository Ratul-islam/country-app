import React from 'react';

const Countrys = (props) => {
    const {remove, capital,  flag, name, population, region} = props;
    function  handleDelete(){
        remove(name.common)
    }
  return (
    <div className='country'>
        <img src={flag.svg} alt={flag.alt}/>
        <div>
            <h3>{name.official}</h3>
            <p>Common Name: {name.common}</p>
            <p>Capital: {capital}</p>
            <p>Region: {region}</p>
            <p>Population: {population}</p>
            <button type='submit' className='deleteBtn' onClick={handleDelete}>Delete</button>
        </div>
    </div>
  )
}

export default Countrys;