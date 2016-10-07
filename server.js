var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var webpages={
    'newpage1': {
        title: 'article 1: srivatsavas first blog ',
        heading:'Article1',
        date: '7 october 2016',
        content:`
                <p>
                This is my first html page in hasura
            </p>`
    },
    'newpage2': {
         title: 'article 2: srivatsavas second blog ',
        heading:'Article2',
        date: '8 october 2016',
        content:`
                   <p>
                This is my second html page in hasura. This is my second html page in hasura. This is my second html page in hasura.
            </p>
            <p>
                 This is my second html page in hasura. This is my second html page in hasura. This is my second html page in hasura.
            </p>`
    },
    'newpage3': {
        title: 'article 2: srivatsavas second blog ',
        heading:'Article2',
        date: '8 october 2016',
        content:`  <p>
                This is my third html page in hasura.  This is my third html page in hasura.  This is my third html page in hasura.
            </p>
            <p>
                  This is my third html page in hasura.  This is my third html page in hasura.  This is my third html page in hasura.
            </p>
             <p>
                  This is my third html page in hasura.  This is my third html page in hasura.  This is my third html page in hasura.
            </p>`
    }
};

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date= data.date;
    var content= data.content;
    var newTemplate= `
    <html>
    <head>
        <title>
           ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
        <meta name="viewport" content="width=device-width ,  initial-scale=1"/>
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">HOME</a>
        </div>
        <hr/>
        <h3> ${heading}</h3>
        <div>
           ${date}
        </div>
        <div>
          ${content}
        </div>
        </div>
    </body>
</html>`

;
    
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
  res.send(createTemplate(webpages[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
