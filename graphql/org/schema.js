// Org.js


const org = `

# An Organization
type org {
# The org ID  
id: ID! @isUnique

# record times insert, update, create,expired...
recordTime: [recordTimes]

# The name of the organization.
name: String

# The display name of an entity.
display_name: String

# A description of the organization.
description: String


# Company websites.
websites: [website]

#Domains controlled by organization
domains: [domain]

# Employees number
employee_count: Int

# Basado en places de Google https://developers.google.com/places/supported_types?authuser=2
address: address

# brands for this organization
brand: brand

# Social accounts
socialAccounts: [socialAccount]

# Industries
industries: [industry]

# Products managed by this organization
products: [product]

# Organization offices
offices: [office]

# Events
events: [event]

# Notes
notes: [note]


# Who founded this organization
founderData: founderData

# The Global Location Number (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.
globalLocationNumber: String

# industry…The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.
isicV4: String

# The official name of the organization, e.g. the registered company name.
legalName: String

# An organization identifier that uniquely identifies a legal entity as defined in ISO 17442.
leiCode: String

# sponsors
sponsors: [sponsors]


# A relationship between two organizations where the first includes the second, e.g., as a subsidiary. See also: the more specific ‘department’ property.
subOrganization: String

# The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.
taxID: String

# The Value-added Tax ID of the organization.
vatID: String

# The type of the organization. 
type: String


# String Optional The symbol associated with the organization; for example, a stock ticker symbol, abbreviation, or acronym.
symbol: String

# The time zone name. It should be an IANA TZ name, such as “America/Los_Angeles”. For more information, see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones.
time_zone: String

# The Unicode country/region code (CLDR) of a location, such as “US” and “419”. For more information, see http://www.unicode.org/reports/tr35/#unicode_region_subtag.
region_code: String


# The BCP-47 language code, such as “en-US” or “sr-Latn”. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
language_code: String


customFields: [customfield]

}




# A Sponsor
type sponsors {
id: ID! @isUnique
}

# A Note
type note {
id: ID! @isUnique
}

# Industry
type industry {
id: ID! @isUnique
name: String
}

# Product
type product {
id: ID! @isUnique
name: String
}

# An organization's office location
type office {
id: ID! @isUnique
location: location
}


# who founded this organization
type founderData {
id: ID! @isUnique
 founders: [person]
 date: [date]
 location: location
}



# Brands are your customer-facing identities. They might represent multiple products or services, or they might literally be multiple brands owned and represented by your company.
type brand {
id: ID! @isUnique
#Type brand, etc
type: String
url: website
name: String
author: String
authorEmail: emailAddress
description: String
# Brand status
status: STATUS
# This is the default brand?
default: Boolean
# record times insert, update, create,expired...
recordTime: [recordTimes]
# All images
images: [image]
# Style scss url
style: String
}



type logo {
# Using for heading, login
primary: image
# Using for footer
secondary: image
# using inf favicon
favicon: image
}

type image {
id: ID! @isUnique
recordTime: [recordTimes]
# Example image/png
content_type: String
size: Int
title: String
# Example https://dummyimage.com/50x50/000/fff.jpg
thumb: String
# Example https://dummyimage.com/1200x450/000000/fff.jpg
src: String
}

`;

export default org;