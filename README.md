# Chads Data Tabler
My data tabler can quickly construct a data table for you, enabling rapid searching through your MongoDB database. The goal is for this to allow you to quickly vet a dataset you have created, and eventually add cleaning tools to make it much easier to clean a fresh dataset from something like a webscraping project.
 
 Currently only supports 3 of the main filter types: range, dropdown and boolean. Though tags is currently in the works. Refer to the currently working on section for what is being added.
 
 ### Example Sites
 
[474k Entries Game Site](http://chadsgames.com) Data Source: [here](https://www.kaggle.com/datasets/jummyegg/rawg-game-dataset)

[24k Entries Movie & TV Site](http://chadsmovies.com) Data Source: [here](https://github.com/neelabalan/mongodb-sample-dataset)

 
 ## Qwick Start Steps
 Pre-Requesites:
 Have a mongodb database setup with your desired dataset in a collection called 'rawData'. Try using the games dataset and mongodbCompass's import functionality for quick setup. If you do, check consideration 4.
 
 ### No Search Setup
 
 1. Clone Repo to local machine.
 
 2. Create new .env in the server file containing:
 
  ```
  MONGOOSE_URI= <mongo connection string>/ <database name>  e.g: 'mongodb://localhost:27017/mydatabase'
 
  USER_USERNAME= <username string''> e.g: 'chad'
 
  USER_PASSWORD= <password string''> e.g: 'password'
 
  PORT= <port> e.g: 5000
  ```
 
3. Create new .env in client containing:
 ```
  REACT_APP_Express_Connection= <ip address>/api/allRoutes/ e.g:'http://localhost:5000/api/allRoutes/'
 
  REACT_APP_APP_NAME= <whatever name you want> e.g:'Chads Data Tabler'
  
  REACT_APP_Search= <false> 
 ```
 
 4. Npm install all packages and npm start both the client and server.

 5. Go to http://localhost:3000/admin and login using the credentials you created. Then navigate to "Filters Setup & Editing". Then click the     intiialize controls icon button. Then wait for server to process the database information and build a new control object. In order to display the name or title of documents, designate one fields type as Search.
 
 6. You can now simply save, and go to http://localhost:3000 to use your data table. At any point you can come back to this page to edit the control object. Generally its recommended to adjust the field names. Fields with a type of 'check' should be changed to a value or omit type.


### With Search Additional Steps (Support For Mongodb Atlas Only. That means not a local db.)
Note: You can still use mongodbCompass with Atlas, rather than a local db.

 1. Toggle the clients .env value react app search value to true.
  ```
   REACT_APP_Search=<true>
  ```
 2. Follow the [MongoDB Atlas AutoComplete Setup Guide](https://www.mongodb.com/docs/atlas/atlas-search/tutorial/autocomplete-tutorial/) to setup an index for our search. Also disable dynamic mapping. Set field mapping up for the same field as you set to the type 'Search', in the admin filter editor page.
 3. In the server .env add the Index Name you set on mongodb atlas to the value 
 ```
 INDEX_NAME = <Index Name> e.g'autocomplete-tutorial'
 ```
 
## Current considerations

 1. The data should go into a collection called 'rawData'. Otherwise you will get an error.
 2. In the application, a value can either be a string or an array of strings. When a value is a string, it will be treated as a single entity and used for dropdown selection. However, during search operations, each individual string within the array will be considered. For instance, take the example of the "genre" field found on the game example website. Many games have a genre value structured like ['Strategy','RPG'].
3. When using the filter search, including a filter will remove all null values from the results regardless of if anything is selected in the filter.
 4. On the filters creator/editor page, there is a button 'Run DB Edit Code'. This can be used on the games dataset to convert the strings seperated by || to an array of strings. Thats all it does at the moment.

## Current Efforts
 
 1. Basically dropdown on steroids, tags is the next data type. For the movie dataset there are 45k actors listed. Tags would allow you to filter by actor to return all movies they have been in. Or for games, filter by publisher to see all their releases.
2. User Guidance and UI Overhaul.
3. Redux Implementation - In Progress
 
 

