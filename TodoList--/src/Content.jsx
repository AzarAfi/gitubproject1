

import ListItem from "./ListItem";


const Content = ({list,handleChenge,handleDelete}) => {
    return (
        <div className='w-screen h-full bg-yellow-500'>
            {list.length ? 
            ( 
                <ListItem 
                list = {list}
                handleChenge={handleChenge}
                handleDelete={handleDelete}
                />
            )
            
            : (<h1 className=' border-4 bg-yellow-500 p-6 h-screen flex items-center justify-center font-bold text-3xl'>YOUR LIST HAS EMPTY</h1>)}
    
        </div>
    );
};

export default Content;


