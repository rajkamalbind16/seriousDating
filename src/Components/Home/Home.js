import React from 'react'
import Styles from "./home.module.css"
import Navabar from '../Navabar/Navabar'
import { Link } from 'react-router-dom'
import Searcha from '../comment/Comment'

const Home = () => {
  return (
    <>
    <div className={Styles.container}>
  <div className={Styles.main}>
 
  <div className={Styles.right}>
            <h3> Meeting Singles from Fairfield</h3>
            <p>Where Exceptional People Meet</p>
            <p>Peronalize Your Experience.</p>
            <br/>
            <div className={Styles.gender}>
            <h3>I am</h3>
            <select>
            
            <option>Male</option>
            <option>Female</option>
            </select>
            <div className={Styles.gender}>
            <h3>Looking for</h3>
            <select>
            
            <option>Male</option>
            <option>Female</option>
            </select>
            </div>
            </div>
            
            <div className={Styles.gender}>
            <h3>Between Ages </h3>
              <input type='number' />
              <h3>and</h3>
              <input type='number' />
            </div>
            <br/>
            <br/>
         
               <button className={Styles.btn}>Upload Image</button>
               <p>Already have an account? Login</p>
            
        </div>
        <br/>
  </div>
    </div>



    </>
  )
}

export default Home