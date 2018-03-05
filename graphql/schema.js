// COMMON
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

// MOCKING
import mocks         from './mocks.js'

// DATA TYPES
import OrgType       from './org/schema'
import PersonType    from './person/schema'
import UserType      from './user/schema'
import CommonType    from './common/schema'
import MentoringType from './mentoring/schema'
import EnumsType     from './enums/schema'
import ServiceType   from './service/schema'
import RootQuery     from './root-query/schema'
import RootMutation  from './root-query/mutation'



// the schema type only has two properties: query and mutations
// the RootQuery contains the root entry points into graphQL
// If you want to define more entry points, you add to RootQuery

// mutation would be your entrypoints for updating / inserting data

// Note: the RootQuery defined in `schema { }` is NOT the `import RootQuery`
// It is the reference to the `type RootQuery` definition
// Ex: if you renamed `type RootQuery` -> `type MasterQuery`, then
// it should be `schema { query: MasterQuery }`

const SchemaDefinition = `
  schema {
    query: RootQuery,
    mutation: RootMutation
  }
`

var typeDefs = [
    SchemaDefinition,
    RootQuery,
    RootMutation,
    CommonType,
    EnumsType,
    OrgType,
    PersonType,
    UserType,
    ServiceType,
    MentoringType
  ]

// RESOLVERS
import resolvers     from './resolvers'


// Our Schema
const schema = makeExecutableSchema({
  // Add the type definitions to the schema
  typeDefs,
  // performs field lookups for a specific type
  resolvers: {},
})


// Add mocks, modifies schema in place
addMockFunctionsToSchema({ schema, mocks, preserveResolvers: true });


// This function call adds the mocks to your schema!
//addMockFunctionsToSchema({ schema, mocks })


export default schema 