import { MongoClient, ObjectID } from 'mongodb';

const prepare = (o) => {
  o._id = o._id.toString();  
  return o
}


const resolvers = {
  
RootMutation: {
    addOrg: async (root, args, context, info) => {
          const id = new ObjectID();
          const result = await context.mongo.collection('Orgs').insert(args)
          return prepare( await context.mongo.collection('Orgs').findOne({_id: result.insertedIds[1]}) )
          } 
}
  
  
};

export default resolvers
 