const express = require('express');
const app = express();
const cors = require('cors')
const allRoutes = require('./routes/allRoutes');
const connectDB = require('./database/connect.js');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// cors
app.use(cors({
  origin:'*',
  methods:['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.use(express.static('./public'));
app.use(express.json());

// routes and middleware
app.use('/api/allRoutes', allRoutes);
app.use(notFound);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5001;

const start = async () => {
  try {
    connectDB(process.env.MONGOOSE_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...\n`,
      )
    );
  } catch (error) {
    console.log(error);
  }
};

start();