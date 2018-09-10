const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

var books = [
  {
    name: 'dffsd432432423',
    genre: 'tesdfs',
    id: '1'
  },
  {
    name: 'dffsd22222',
    genre: 'tesdfs43553235',
    id: '2'
  },
  {
    name: 'dffsd111111',
    genre: 'tesdfs4234232343',
    id: '3'
  }
]

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    genre: {
      type: GraphQLString
    }
  })
});


const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve(parent, args) {
        return _.find(books, { id: args.id });
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})