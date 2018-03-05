const RootQuery = `

 # All root queries

  type RootQuery {
    
    # Get a Person
    person(id: String!): person,

    # Returns an array of persons
    persons: [person],

    # Get an Organization
    org(id: String, domain: String): org,

    # Returns an array of Organizations
    orgs: [org],

  }
`

export default RootQuery