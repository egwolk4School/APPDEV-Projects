import React from 'react'
// import PropTypes from 'prop-types'
export const ListOfFruits = (props) => {
    const listItems = props.items.map(item=>
        <li key={item.id}><strong>{item.name}</strong>: &nbsp;{item.color}</li>
        ) 
  return (
    <>
    <h3 className="list-category">{props.category}</h3>
    <ol className='list'>{listItems}</ol>
    </>
  )
}

ListOfFruits.defaultProps ={
    category:"I do not like fruits!",
    items:[]
}
// ListOfFruits.PropTypes ={
//     category:prp
// }

