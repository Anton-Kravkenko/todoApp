import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import {MdBookmarkAdd} from 'react-icons/md';
function TodoItems({todos, index, deleted}) {
  return (
    <div>
        <div className='mapingdivs' key={todos.index}>
    <div className='widthBLOCK'>
     <p className='m5' > {todos.title}</p>
    </div>
    {/* <MdBookmarkAdd className='Add-to-mark' onClick={() => MarkingElement(index)}/> */}
     <FaTrashAlt className='trash__deleteitems' onClick={() => deleted(index)}></FaTrashAlt>
      </div>
    </div>
  )
}

export default TodoItems
