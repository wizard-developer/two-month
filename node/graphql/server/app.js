const express = require('express');
const graphqlHttp = require('express-graphql');
const schema = require('./schema/schema')

const app = express();
app.use("/graphql", graphqlHttp({
  schema,
  graphiql: true
}));

app.listen(3322, () => {
  console.log(`now listening for requests on port 3322`)
});