const express = require('express');
// Making an express app; with methods and framework that express uses
const app = express();

app.get('/lorem', function(req, res){
  var loremIpsum = require('lorem-ipsum')
  var output = loremIpsum({
    count: 3,
    units: 'paragraphs',
    format: 'html'});

res.send(output);
})

app.listen(3000, function(){
  console.log('Working...');
});
