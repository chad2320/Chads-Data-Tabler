# Chads Data Tabler
My data tabler can quickly construct a data table for you, enabling rapid searching through your MongoDB database. The goal is for this to allow you to quickly vet a dataset you have created, and eventually add cleaning tools to make it much easier to clean a fresh dataset from something like a webscraping project.
 
 Currently only supports 3 of the main filter types: range, dropdown and boolean. Though tags is currently in the works. Refer to the currently working on section for what is being added.
 
 ### Example Sites
 
[474k Entries Game Site](http://chadsgames.com) Data Source: [here](https://www.kaggle.com/datasets/jummyegg/rawg-game-dataset)

[24k Entries Movie & TV Site](http://chadsmovies.com) Data Source: [here](https://github.com/neelabalan/mongodb-sample-dataset)

 
 ## Getting Started Steps
 
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
 ```
 
 4. Npm install all packages and npm start both the client and server.

 5. Go to http://localhost:3000/admin and login using the credentials you created. Then navigate to "Filters Setup & Editing". Then click the     intiialize controls icon button. Then wait for server to process the database information and build a new control object.
 
 6. You can now simply save, and go to http://localhost:3000 to use your data table. At any point you can come back to this page to edit the control object. Generally its recommended to adjust the names, and entries labelled as 'check' should be changed to a value or omit type.
 
 
## Current considerations
 
 1. Each object should contain a field called name or title. Otherwise it will error. Fixing this soon by utilizing the 'Search' type of value on the filters page.
 2. The data should go into a collection called 'rawData'. Otherwise you will get an error.
 3. In the application, a value can either be a string or an array of strings. When a value is a string, it will be treated as a single entity and used for dropdown selection. However, during search operations, each individual string within the array will be considered. For instance, take the example of the "genre" field found on the game example website. Many games have a genre value structured like ['Strategy','RPG'].
 4. When using the filter search, including a filter will remove all null values from the results regardless of if anything is selected in the filter.
 5. This is a new project by a new dev. Things will most likely break.
 6. On the filters creator/editor page, there is a button 'Run DB Edit Code'. This can be used on the games dataset to convert the strings seperated by || to an array of strings. Thats all it does.

## Current Efforts
 
 1. Basically dropdown on steroids, tags is the next data type. For the movie dataset there are 45k actors listed. Tags would allow you to filter by actor to return all movies they have been in. Or for games, filter by publisher to see all their releases.
 2. Search and individual pages. I want to explore mongodb atlases built in search functionality. This would also allow the display of the 'value' data type on individual pages.
 
 

