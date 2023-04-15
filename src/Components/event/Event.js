import React from 'react'
import Styles from "./event.module.css"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Event = () => {
  return (
    <>
     <h1>Event & Function</h1>
    <div className={Styles.container}>
   
    <div>
        <img className={Styles.img} src='https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
    </div>
    <div>
        <img className={Styles.img} src='https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZXZlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
    </div>
    <div>
        <img className={Styles.img} src='https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZXZlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
    </div>
    <div>
        <img className={Styles.img} src='https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZXZlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
    </div>
    <div>
        <img className={Styles.img} src='https://images.unsplash.com/photo-1522158637959-30385a09e0da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
    </div>
    <div>
        <img className={Styles.img} src='https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
    </div>
    </div>
    <h1>Up Coming Event</h1>
    <div className={Styles.cal}>
 <Calendar/>
    </div>
   
    </>
  )
}

export default Event