import React from 'react'
import PropTypes from 'prop-types'
import './list.css'

const List = ({ data, ListItem }) => {
  const ListItems = data.map((item, key) => <ListItem {...item} key={`${key}-${item.url}`} />)
  return (
    <nav className='list'>
      <ul className='list-items'>
        {ListItems}
      </ul>
    </nav>
  )
}

List.propTypes = {
  data: PropTypes.array.isRequired
}

export default List
