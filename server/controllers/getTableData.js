const asyncWrapper = require('../middleware/async')
const searchModel = require('../models/searchModel')


const getData = asyncWrapper(async (req, res, next) => {
  /* Checks which type of query is coming in. 
  Not sure what best practice is here */
  //console.log('Starting to format request.')

  //Below we decode the search object passed from the client.
  const queryString = req.url.split('?')[1];
  const params = new URLSearchParams(queryString);
  const searchParamString = decodeURIComponent(params.get('searchParams'));
  const searchParams = JSON.parse(searchParamString);

  //Here we destructure and log stuff about the search parameters
  let filters = searchParams.filters
  //console.log(`We have ${filters.length} filters for this search.`)
  let {limit,page,sort1Path,sort1Data,sort2Path,sort2Data,} = searchParams.controls;
  

/*-------------------Data Aggregation Formatting Section-----------------------*/
//console.log(sort1Data,sort2Data)
let finalSort=[]
function formatSort(){
  //If there is no sorting necessary
  if(!sort1Data && !sort2Data){
    finalSort = [
      {$match:{...filters}},
      {$facet:{
          "data":[
              {$skip: parseInt(limit) * parseInt(page)},
              {$limit:parseInt(limit)}
          ],
          "count":[
              {$group:{_id:null,"Total":{$sum:1}}}
          ]
      }}, 
  ]
  //If there is 2 sorts needed
  } else if(sort1Data && sort2Data){
    finalSort = [
      {$match:{...filters}},
      {$facet:{
          "data":[
              {$sort:{
                [sort1Path]:parseInt(sort1Data),
                [sort2Path]:parseInt(sort2Data)
                }
              },
              {$skip: parseInt(limit) * parseInt(page)},
              {$limit:parseInt(limit)}
          ],
          "count":[
              {$group:{_id:null,"Total":{$sum:1}}}
          ]
      }}, 
  ]
  //If there are 1 sort needed
  } else{
  finalSort = [
    {$match:{...filters}},
    {$facet:{
        "data":[
            {$sort:{[sort1Path]:parseInt(sort1Data)}},
            {$skip: parseInt(limit) * parseInt(page)},
            {$limit:parseInt(limit)}
        ],
        "count":[
            {$group:{_id:null,"Total":{$sum:1}}}
        ]
    }}, 
]
  }
} formatSort()
  



    /* Attempt to search database for results. */
  try {
      //Grab data from db
      //console.log('Starting Aggregate Search')
      const tableData = await searchModel.aggregate(finalSort)
      //Send final result
      if(tableData[0].data.length > 0){
        //console.log(`Found ${tableData[0].count[0].Total} results. Sending ${limit} to client.`)
      } else{
        //console.log('No results. Broaden filters.')
    }
      res.status(200).json({ tableData })
  } catch (error) {
    //console.log(error)
  } 
   
  })

module.exports = {
    getData,
}

