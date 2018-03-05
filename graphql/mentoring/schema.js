// mentoring.js


const mentoring = `

# A mentoring Program

type programme {
#the unique identifier for the programme
id: ID! @isUnique
# The name of the programme
name: String
# The description of the mentorship programme
description: String
# Image
Logo: String
# Person who create program
author: person
# Mentors of this program
mentors: [person]
# Mentees participating in this program
mentees: [person]
}


`;

export default mentoring;