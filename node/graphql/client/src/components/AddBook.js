import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo'
import { getAuthorsQuery, getBooksQuery, addBookMutation } from '../queries/queries'



class AddBook extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "",
      genre: "",
      authorId: ""
    }
  }

  submitFrom(e) {
    e.preventDefault();
    this.props.addBookMutation({
      variables: this.state,
      refetchQueries: [
        {
          query: getBooksQuery
        }
      ]
    })
  }

  displayAuthor() {
    var data = this.props.getAuthorsQuery;
    if(data.loading) {
      return (<option disabled>loading authors...</option>)
    } else {
      return data.authors.map(author => {
        return (
          <option key={author.id} value={author.id}>
            {
              author.name
            }
          </option>
        )
      })
    }
  }
  render() {
    return (
      <form id="add-book" onSubmit={this.submitFrom.bind(this)}>
        <div className="field">
          <label>BookName</label>
          <input onChange={(e) => this.setState({name: e.target.value})} type="text" />
        </div>

        <div className="field">
          <label>Genre</label>
          <input onChange={(e) => this.setState({genre: e.target.value})} type="text" />
        </div>

        <div className="field">
          <label>Author</label>
          <select onChange={(e) => this.setState({authorId: e.target.value})}>
            <option>select author</option>
            {this.displayAuthor()}
          </select>
        </div>

        <button>+</button>
      </form>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery, {name: "getAuthorsQuery"}),
  graphql(addBookMutation, {name: "addBookMutation"})
)(AddBook);