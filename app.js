const express = require('express');
const mysql = require('mysql');
const session = require('express-session');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'#######',
  database:'todos'
});

app.get('/', (req, res) => {
  connection.query (
    'SELECT * FROM contents',
    (error,results) => {
      res.render('listup.ejs',{contents: results });
    }
  );
});

app.get('/create',(req,res) => {
    console.log("Go to the page to add new task");
    /*res.redirect('/');*/
    res.render('create.ejs')
  }
);

app.post('/create',(req,res,next)=>{
  const new_task = req.body.task;
  console.log(new_task);
  res.redirect('/');
});

app.listen(3000);