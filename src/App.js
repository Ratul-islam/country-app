import './App.css';

import Nav from "./components/Nav"
import Home from "./components/Home"
import {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';





function App() {

  const [datas, setDatas] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(()=>{
      fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
          if(!res.ok){
              throw Error("An Error occurred while fetching Data")
          }
          return res.json()
      })
      .then((data) => {
          setIsLoading(false)
          // return setDatas(data)
          return data.map((data)=>setDatas((old)=>{
            return [...old, {id:uuidv4(),data}]
          }))
      })
      .catch((err) => {
          setError(err.message)
          setIsLoading(false)
      })
  })

  const handleRemove=(props)=>{
    const newData = datas.filter((data)=> data.data.name.common !== props)
    setDatas(newData)
  }


  return (
    <div className="App">
      <Nav />
      <Home  remove={handleRemove} datas={datas} isLoading={isLoading} error={error}/>
    </div>
  );
}

export default App;
