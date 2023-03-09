import React, { useState } from 'react'
import styles from './css/carproduct.module.css'
import { useSearchParams } from 'react-router-dom'
function CarsProduct({data}) {
  const [search,setsearch]=useSearchParams()
  const [value1,setvalue1]=useState()
  const change=(e)=>
  {
    if(e.target.value!="none")
    {
      setvalue1(e.target.value)
      setsearch({filter:e.target.value})
    }
    else{
      setvalue1(0)
      setsearch({})
    }
    
  }
  const filter=search.get('filter')===value1
return (
  <>
  <br/>
  <input type="radio"  name="fav_language" onChange={change} value="1000"/>
  <label >1000</label><br/>
  <input type="radio"  name="fav_language" onChange={change} value="3500"/>
  <label >3500</label><br/>
  <input type="radio"  name="fav_language" onChange={change} value="5500"/>
  <label >5500</label><br/>
<input type="radio"  name="fav_language" onChange={change} value="none"/>
  <label >NONE</label>
    <div className={styles.card}>
      {filter?data.map((data,index)=>
        { 
          if(data.price>=value1)
          {
            return(
              <div className={styles.card1} key={index}>
                <h4>Name:{data.name}</h4>
                <h5>Price:{data.price}</h5>
                <hr/>
                <img src={data.img} alt="f"/>
              </div>
              )
          }
        }
      ):
      data.map((data,index)=>
        { 
          return(
          <div className={styles.card1} key={index}>
            <h4>Name:{data.name}</h4>
            <h5>Price:{data.price}</h5>
            <hr/>
            <img src={data.img} alt="f"/>
          </div>
          )
        }
      )
    }     
    </div>
    {/* <button onClick={()=>{setsearch({filter:value1})}} >Active</button>
    <button onClick={()=>{setsearch({})}} >Unactive</button> */}
    </>
  )
}

export default CarsProduct
