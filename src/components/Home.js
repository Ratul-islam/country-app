import React from 'react';

import Countrys from "./Countrys"




const Home = (props) => {
    const {remove, datas,isLoading,error} = props
  return (
    <main >
        {isLoading && <h2>Loading........</h2>}
        {error && <h2>{error}</h2>}
        {datas.map(data => <Countrys remove={remove} id={data.id} key={data.id}  flag={data.data.flags} name={data.data.name} capital={data.data.capital
        } region={data.data.region} population={data.data.population}/>)}

    </main>
  )
}

export default Home