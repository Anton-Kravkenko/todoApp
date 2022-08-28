import React from 'react'

const newComponents = () => {
  return (
    <div>
       {  todos.map(todo1 => <div className='mapingdivs'>
<div className='widthBLOCK'>
<p> {todo1.titles}</p>
 <p> {todo1.bodys}</p>
</div>

 <button className='delete' onClick={deleted} >Удалить</button>
 
  </div>)}
    </div>
  )
}

export default newComponents
