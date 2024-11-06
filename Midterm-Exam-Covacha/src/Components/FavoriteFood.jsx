import React from 'react'
import propTypes from 'prop-types'

export const FavoriteFood = ({
    items=[],
    category='Category'
}) => {
    const listItems =  items.map(item=>
        <li key={item.id}><strong>{item.name}:</strong> | Color: {item.color} | Rating: {item.rating}</li>)
  return (
    <>
    <div>
        <h3>{category}</h3>
        <ul>{listItems}</ul>
    </div>
    </>
  )
}

FavoriteFood.propTypes={
    category:propTypes.string,
}


