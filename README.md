# capstone-project

Recommerce is a phone reselling platform that allows users to sell their old mobile devices. /

Visit the website: https://recommerce-front-end.herokuapp.com/

# Homepage

![ScreenShot](https://res.cloudinary.com/realtor/image/upload/v1630975226/main_y8quth.png)

# Login

![ScreenShot](https://res.cloudinary.com/realtor/image/upload/v1630975226/login_aoager.png)

# Register

![ScreenShot](https://res.cloudinary.com/realtor/image/upload/v1630975224/register_rbzoi8.png)


# Select Device

![ScreenShot](https://res.cloudinary.com/realtor/image/upload/v1630975225/model-page_xjyfsk.png)


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


# Attributes 

Attribute | Type |  Description
------------- | ---------- | ----------
storage_capacity_size | string (NOT NULL) | Storage Capacity size of device. Can be used in the storage-capacity api.   
service_provider_name |  string (NOT NULL) |  Name of service provider for device. Can be used in service-provider api. 
device_company_name | string (NOT NULL) |  Name of device manufacturer. Can be used in device-company api. 
condition_name | string (NOT NULL) | Condition of device. Can be used in the condition api. 
street_address | string (NOT NULL) | Address of customer used for selling/buying purposes. Can be used in client-temp or person api. 
state | string (NOT NULL) | State of customer used for selling/buying purposes. Can be used in client-temp or person api. 
zip | string (NOT NULL) | Zip code of customer used for selling/buying purposes. Can be used in client-temp or person api. 
country | string (NOT NULL) | Country of customer used for selling/buying purposes. Can be used in client-temp or person api. 
email | string (NOT NULL) | Email of customer used for selling/buying purposes. Can be used in client-temp or person api. 
total_price | double (NOT NULL) | Total price of users order. Can be used in new-orders api. 
username | string (NOT NULL) | Username for users account. Can be used in account api. 
password | string (NOT NULL) | Password for users account. Can be used in account api. 
device_name | string (NOT NULL) | Name of device for buying/selling purposes. Can be used in device api.
device_price | double (NOT NULL) | Price of device for buying/selling purposes. Can be used in device api.

