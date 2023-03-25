import React,{useState, useEffect} from 'react';

import {v4 as uuidv4} from 'uuid';
import Countrys from "./Countrys"




const Home = (props) => {
    const {remove, datas,isLoading,error} = props
  return (
    <main >
        {isLoading && <h2>Loading........</h2>}
        {error && <h2>{error}</h2>}
        {datas.map(data => <Countrys remove={remove} id={data.id} key={data.id}  flag={data.data.flags} name={data.data.name} capital={data.data.capital
        } region={data.data.region} currencies={data.data.currencies} languages={data.data.languages} population={data.data.population}/>)}

    </main>
  )
}

export default Home