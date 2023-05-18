import React from 'react';
import ListItems from './ListItems';
//code here
 const List = ({listx}) =>{
  return(
    
 
    listx.map((i)=>{
      return <ListItems valuex={i} />
    })
    
  
  )
}

export default List;
