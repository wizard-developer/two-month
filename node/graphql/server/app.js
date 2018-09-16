const express = require('express');
const graphqlHttp = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors())

mongoose.connect("mongodb://test:3316216zjl@ds151282.mlab.com:51282/graphql-djkloop?authSource=graphql-djkloop&w=1", { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('connection to database')
})
app.use("/graphql", graphqlHttp({
  schema,
  graphiql: true
}));

app.listen(3322, () => {
  console.log(`now listening for requests on port 3322`)
});