# capstone-project

# Backend API End Points
Method        |   End Point    | Description
------------- | -------------  | -----------
GET           | /api/condition | Gets all of the device conditions
GET           | /api/client-temp | Gets all of the client_temp rows
POST          | /api/client-temp | Saves a client_temp object to the database
GET           | /api/storage-capacity | Gets all storage capacity
POST          | /api/storage-capacity | Saves the storage capacity
GET           | /api/service-provider | Gets all service providers
POST          | /api/service-provider | Saves the service provider 
GET           | /api/device-company | Gets all device companies
POST          | /api/device-company | Saves a device company object to the database
GET           | /api/condition      | Gets all of the phone conditions
POST          | /api/condition      | Save the condition to the database
GET           | /api/device         | Get all of the device rows 
POST          | /api/device         | Saves the device to the database 
GET           | /api/new-orders     | Gets all of the new-order rows 
POST          | /api/new-orders     | Saves the new-orders to the database
GET           | /api/orders-complete | Gets all of the orders-complete rows
POST          | /api/orders-complete | Saves the orders-complete object 
GET           | /api/account | Gets all account rows 
POST          | /api/account | Saves the account with the Role and Person object. You need the RoleId and PersonId in order to POST to the end point\
POST          | /api/authentication | Logins the user to the database. This sends back a JWT response token
POST          | /api/register       | Registers a new user. Requires RoleId and PersonId
Get           | /api/role           | Gets all of the Role rows 
POST          | /api/role           | Saves Role 
GET           | /api/person | Gets all person rows 
POST          | /api/person | Saves the person 




# Known bugs
- If a person object isn't found during a POST request to api/register a status 500 is thrown
- If a role object isn't found during a POST request to api/register a status 500 is thrown
- If the account object isn't found during a login, POST request to /api/authentication, then a status 400 is thrown 

- JWTRequestFilter throws generic errors. Need to go back and modify it so it will send the correct error codes
back to the caller