import casual from 'casual';

import { MockList } from 'graphql-tools';

// MOCKUP DATA

// TYPE Name
casual.define('name', function() {
  
  const demo_name = casual.first_name 
  const demo_lastname = casual.last_name
  const demo_lastnamne2 = casual.last_name
  
	return {
		displayName:  demo_name + " " + demo_lastname,
    displayNameLastFirst: demo_lastname + ", " + demo_name,
    givenName: demo_name,
    familyName: demo_lastname,
    middleName: demo_lastnamne2,
    honorificPrefix: casual.name_prefix,
    honorificSuffix: casual.name_suffix ,
	};
});

            

casual.define('org', function() {
const demo_name_company = casual.company_name 
return {
		id:  'org_' + casual.uuid,
    name: demo_name_company,
    display_name: demo_name_company,
    description: casual.description ,
  
  
	};
});


casual.define('recordTimes', function() {
 return {
		create_time: casual.unix_time,
    update_time: casual.unix_time,
    delete_time: casual.unix_time,
    expire_time: casual.unix_time,
    start_time:  casual.unix_time,
    end_time:    casual.unix_time,
    disable_at:  casual.unix_time 
  
  
	};
});

//GENERAL Types


      
const mocks = {
    website: () => ({
      url: casual.url,
     name: casual.title,
    }),
  
    address: () => ({
      place: 'https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJcSVZiF0sQg0RQfgrCTySB3s&key=AIzaSyASf6YPfJTG6OnaNpqsH1mtAWNSbZlsQVs',
    }),
  
    org: () => casual.org,
  
   recordTimes: () => casual.recordTimes,
   // brand: () =

  };

export default mocks;