// Person.js
const person = `
  # A Real Person
  type person {

    # The person ID
    id: ID! @isUnique

    # record times insert, update, create,expired...
    recordTime: [recordTimes]
  
    # The person’s names.
    names: [Name]

    # The person’s past or current organizations.
    organization: [org]
    
    #
    gender: gender

    # The person’s locale preferences.
    locales: [locale]

    # persons metadatas
    metadata: [personsMetadata]
    
    # The person’s street addresses.
    addresses: address

    # The person’s biographies.
    biographies: [biography]

    # birthdays
    birthday: [birthday]
    
    # A person’s photos (profile, cover, etc).
    photos: [photoPerson]

    # A person’s email address.
    emailAddress: [emailAddress]

    # Programs
    programs: [programme]
   
    # The person’s enrollments.
    enrollments: [enrollment]

    # The person’s events.
    events: [event]

    

  }

  

# A person’s read-only photo. A picture shown next to the person’s name to help others recognize the person.
type photoPerson {
  #True if the photo is a default photo; false if the photo is a user-provided photo.
  default: Boolean
  metadata: fieldMetadata
  # The URL of the photo. You can change the desired size by appending a query parameter sz=size at the end of the url. xxx/photo.jpg?sz=50
  url: String
 }


  # persons metadatas
  type personsMetadata {
    id: ID! @isUnique
  }

  #The person’s names.
  type Name {

    #	The read-only display name formatted according to the locale specified by the viewer’s account or the Accept-Language HTTP header.
    displayName: String
    displayNameLastFirst: String

    # The given name (first name) of this person.
    givenName: String
    # The middle name of this person.
    middleName: String
    # The family name (last name) of this person.
    familyName: String

    # The honorific prefixes (such as "Dr." or "Mrs.") for this person.
    honorificPrefix: String
    # The honorific suffixes (such as "Jr.") for this person.
    honorificSuffix: String
    
  }

type biography {
   #The content type of the biography.
    contentType: CONTENT_TYPE
    metadata: fieldMetadata
    #The short biography.
    value: String
 }



type fieldMetadata {
  # True if the field is the primary field; false if the field is a secondary field.
  primary: Boolean
  # True if the field is verified; false if the field is unverified. A verified field is typically a name, email address, phone number, or website that has been confirmed to be owned by the person.
  verified: Boolean
  # The source of the field.
  source: source
}

 type birthday {
      # Birthday
			date: date
      metadata: fieldMetadata
      # A free-form string representing the user’s birthday.
      text: String
 }
 
 type gender {
			id: ID! @isUnique
      # The gender for the person. The gender can be custom or predefined. Possible values include, but are not limited to, the following: male, female, other, unknown
      value: String
 }
 type imClient {
			id: ID! @isUnique
 }

 
 type nickname {
			id: ID! @isUnique
 }
 type occupation {
			id: ID! @isUnique
 }
 
 type phoneNumber {
			id: ID! @isUnique
 }
 
 type relations {
			id: ID! @isUnique
 }
 type relationshipInterest {
			id: ID! @isUnique
 }
 type relationshipStatus {
			id: ID! @isUnique
 }
 type residence {
			id: ID! @isUnique
 }
 type skill {
			id: ID! @isUnique
 }
 type tagline {
			id: ID! @isUnique
 }
 type time {
			id: ID! @isUnique
 }
 type url {
			id: ID! @isUnique
 }
 type userDefined {
			id: ID! @isUnique
 }

`;

export default person;