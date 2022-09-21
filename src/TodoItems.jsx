import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import {MdBookmarkAdd} from 'react-icons/md';
function TodoItems({todo1, index, deleted}) {
  return (
    <div>
        <div className='mapingdivs' key={index}>
    <div className='widthBLOCK'>
     <p className='m5' > {todo1.title}</p>
    </div>
    {/* <MdBookmarkAdd className='Add-to-mark' onClick={() => MarkingElement(index)}/> */}
     <FaTrashAlt className='trash__deleteitems' onClick={() => deleted(index)}></FaTrashAlt>
      </div>
    </div>
  )
}

export default TodoItems
