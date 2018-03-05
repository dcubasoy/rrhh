// server.js
// where your node app starts
import express from 'express'
import cors from 'cors'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import bodyParser from 'body-parser'
import schema from './graphql/schema.js'
import { Engine } from 'apollo-engine';

import { express as middleware } from 'graphql-voyager/middleware';

var app = express();
var compression = require('compression')





 
// DATABASE MONGO CONNECTION
import { MongoClient, ObjectId } from 'mongodb'
const assert = require('assert');
const dbName   = 'rrhh';


// Use connect method to connect to the server
const db = MongoClient.connect(process.env.MONGO_URL, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to Mongo");
 
  const db = client.db(dbName);
 
  client.close();
});

// END DATABASE MONGO CONNECTION



const graphQLSchema = schema // GraphQL Schema is imported here
app.use(compression());
  


  
// OPTIONAL: perfomance engine https://engine.apollographql.com/service/rrhhapi
const engine = new Engine(
  {
      engineConfig: {apiKey: 'service:rrhhapi:8UqbC5rrO80NMxMZkppsmQ',
      logging: {level: 'ERROR'},  // Engine Proxy logging level. DEBUG, INFO, WARN or ERROR
}});
engine.start();app.use(engine.expressMiddleware());
// END Perfomance engine
  
  
// For graphiQL
const initialQuery = `{
  orgs {
    id
  }
}`;

const options = {
  endpointURL: '/graphql',
  query: initialQuery,
  operationName: '',
  variables: {},
  result: {},
  passHeader: '',
  editorTheme: ''
}
// END GraphiQL


// ************************* ENDPOINTS *********************************************************************************

// CORS
app.use('*', cors({origin: '*'}))
// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: {}, tracing: true,  cacheControl: true }));
// graphQL console
app.use('/graphiql', graphiqlExpress( options ));
// graphQL visual
app.use('/voyager', middleware({ endpointUrl: '/graphql' }));

// ************************* START SERVER AND LISTENING REQUEST  ********************************************************



var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
  console.info('https://rrhh-cloud.glitch.me/graphql')
  console.info('https://rrhh-cloud.glitch.me/graphiql')
  console.info('https://rrhh-cloud.glitch.me/voyager')
});

