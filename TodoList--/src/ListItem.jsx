import React from 'react'
import List from './List'


const ListItem = ({list,handleChenge,handleDelete}) => {
  return (
    <ul className='flex flex-col items-center m-10 text-2xl font-bold'>
                {
                    list.map(item => (

                 <List 
                 
                 item = {item}
                 handleChenge={handleChenge}
                 handleDelete={handleDelete}
                 key={item.id}
                 />
                  
                    ))
                }
            </ul>
  )
}

export default ListItem