// User.js
const User = `
  type User {

    # The user ID
    id: ID! @isUnique
    
  }

# A role: teacher, student,  parent, participant, admin
type Role {
    # The Role ID
    id: ID! @isUnique
}


`;

export default User;