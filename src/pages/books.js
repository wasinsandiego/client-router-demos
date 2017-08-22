import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import List from '../ui/list'
import BooksItem from '../ui/book-item'

class BooksPage extends Component {

  render () {
    return (
      <article>
        <h2>Books</h2>
        <List data={this.props.books.data} ListItem={BooksItem} />
      </article>
    )
  }
}

BooksPage.propTypes = {
  books: PropTypes.object
}

const mapStateToProps = (state) => ({
  books: state.books
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(BooksPage)
