const express = require('express');
const fs = require('fs');
const app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.text({ type: 'application/xml' }))

app.get('/',(req,res)=>{
  fs.readFile('./response2.json', 'utf8', function (err,data) {
    return res.send(data);
  });
});

app.get('/findParentApps',(req,res)=>{
    fs.readFile('./findParentApps.json','utf8',function(err,data){

        return res.send(JSON.parse(data));
    });
  });

app.get('/findChildApps/Zendesk',(req,res)=>{
  fs.readFile('./childApps.json','utf8',function(err,data){
    res.send(JSON.parse(data));
  })
})

appname = 'Supplier%20Zendesk%20Access';

app.get('/findEntitlements/' + appname,(req,res)=>{
  console.log("Find entitlements is called");
  fs.readFile('./entitlements.json','utf8',function(err,data){
    res.send(JSON.parse(data));
  })
})

app.post('/token',(req,res)=>{
    console.log('req',req.body);
  console.log('headers',req.headers)
  res.send('token=AAAAFFFF');
});


app.post('/changeRequest&token=AAAAFFFF',(req,res)=>{
console.log("Inside Change Request Call");
console.log(req.body);
console.log(req.headers);
  res.send('Successful');
});
  // var fileData = fs.readFileSync('./response1.json');
//   var myString = JSON.stringify(fileData);
// var myNewString = myString.replace(/\\/g, "");
// console.log(myNewString)
//   res.setHeader('Content-Type', 'application/json');

  // res.send(JSON.parse(fileData,(key,value)=> {
  //   return JSON.stringify(value);
  // });


app.listen(2000,()=>{
  console.log('starded at 2000')
})
