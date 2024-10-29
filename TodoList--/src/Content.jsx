import React, { useState } from 'react';
import { FaTrash } from "react-icons/fa";


const Content = () => {
    const [list, setList] = useState([
        {
            id: 1,
            Actor: "Vijai",
            Movie: "GOAT",
            see: true
        },
        {
            id: 2,
            Actor: "SK",
            Movie: "Amaran",
            see: true
        },
        {
            id: 3,
            Actor: "Ajith",
            Movie: "Vida Muyarchi",
            see: false
        },
        {
            id: 4,  
            Actor: "Dhanush",
            Movie: "Raayan",
            see: true
        }
    ]);

    function handleChenge(id){
       let listitem=list.map((item)=> item.id===id ? {...item,see:!item.see}:item)
       setList(listitem)
    }
    function handleDelete(id){
        let listdel=list.filter((item)=> item.id!==id)
        setList(listdel)
    }



    return (
        <div className='w-screen h-full'>
            <ul className='flex flex-col items-center m-10 text-2xl font-bold'>
                {
                    list.map(item => (
                        <li key={item.id} className='flex m-3 bg-slate-600 p-5 mx-6 w-1/3 justify-around text-yellow-50 rounded-full'>
                            <input type="checkbox" checked={item.see} className='w-10 h-10' onChange={()=>handleChenge(item.id)}/>
                            <label>{item.Actor}</label>
                            <label>{item.Movie}</label>
                            <FaTrash className='text-white w-10 h-10 hover:text-red-700' 
                            role='button'  onClick={()=>handleDelete(item.id)}/>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Content;


