# capstone-project

# Backend API End Points
Method        |   End Point    | Description
------------- | -------------  | -----------
GET           | /api/condition | Gets all of the device conditions
GET           | /api/client-temp | Gets all of the client_temp rows
GET           | /api/storage-capacity | Gets all storage capacity
GET           | /api/service-provider | Gets all service providers
GET           | /api/device_company | Gets all device companies
GET           | /api/account | Gets all account rows 
GET           | /api/person | Gets all person rows 



# Known bugs
- If a person object isn't found during a POST request to api/register a status 500 is thrown
- If a role object isn't found during a POST request to api/register a status 500 is thrown
- If the account object isn't found during a login, POST request to /api/authentication, then a status 400 is thrown 

- JWTRequestFilter throws generic errors. Need to go back and modify it so it will send the correct error codes
back to the caller