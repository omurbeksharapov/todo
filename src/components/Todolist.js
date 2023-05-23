import React from 'react'

import './Todo-list-tem.css';
const Todolist = ({todoes}) => {

     todoes=[
        {label:'Drink coffee',important:true, id:1},
        {label:'Make awesome app',important:false, id:2},
        {label:'Drink Coffee',important:false , id:3}
    ]
    const elements = todoes.map((item)=>{
        
          const {id, ...itemProps}=item
        //1  {label:'Drink coffee',important:true, id:1},
        return ( 
            
            <p className='list-group-item'>
              <Todolist />   
            </p>  
            
        )
            // <div>
            // </p>
            //   <p>Drink coffee</p>
            // </div>

                 // <p>
            // <div>
            //   <p>Make awesome app</p>
            // </div>
    })
    return (
        <ul className='list-group todo-list' >
          {elements}
        </ul>
    )
}
export default Todolist;