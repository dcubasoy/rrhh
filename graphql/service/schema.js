// User.js
const Service = `
type Service {
    # The Service ID
    id: ID! @isUnique
    # Service Name
    name: String
    
}

# Platforms the service is available on
type Platform {

# Platform Identifier
urn: String
# URL to find service on this platform
url: String
# External Platform Identifier (Survey, Report, BatchUpload, etc)
idRef: String

}


# Persons/Groups Enroll a service
type enrollment {
id: ID! @isUnique
# Date this enrollment was last modified
date: date
service: Service
# Status of this enrollment
status: String
role: Role
}

# An event
type event {
id: ID! @isUnique
}



`;

export default Service;