 const express = require('express');

  const morgan = require('morgan')

  const mongoose = require('mongoose')
const { nextTick } = require('process');
//const router = express.Router();
const blogRoutes = require('./routes/blogRoutes')



//const blog = require('./models/blogs');

const { result } = require('lodash');
const { response } = require('express');


 //express app 

 const app = express();

 

 //connect to  mongodb
 const dbURI = 'mongodb+srv://frankly:test123@cluster0.p8p2jqd.mongodb.net/note-test?retryWrites=true&w=majority';

 //listen for request
 mongoose.connect(dbURI)
 .then((result) => 
 app.listen(3000))
 .catch((err) =>
    console.log(err));
  
 //register app with  ejs template

  app.set('view engine', 'ejs');

 
 app.use(express.static('public'));
 app.use(morgan('dev'));
 app.use(express.urlencoded({extended: true})) //for accepting form Data
// 
// 
// 
//  app.get('/add-blog', (req, res) => {
  // const blog = new Blog( {
    // title: 'new blog 2',
    // snippet: 'about new Blog',
    // body: 'more about new Blog'
  //  });
// 
  //  blog.save()
  //  .then((result) => {
    // res.send(result)
  //  })
  //  .catch((err) => {
    // console.log(err.log);
//  });
// 
// })
// 
// app.get('/all-blogs', (req, res) => {
  // Blog.find().then((result) => {
    // res.send(result);
  // }).catch(err => console.log(err));
//  
// })
// 
// 
// app.get('/single-blog', (req, res) => {
  // Blog.findById("62ed06c54aedcdf8a660b6fd")
  // .then((result) => {
    // res.send(result);
  // }).catch((err) => consol.log(err));
// })
// 



    

 app.get('/', (req, res) => {
  res.redirect('/blogs');
    // res.send('<p>Home Page</p>');

    // const blogs = [ {title: 'Yoshi finds eggs', snippet: 'lorem ipsum dolor sit emat'},
    // {title: 'Mario finds stars ', snippet: 'loremsipsume and  dolo sit emayt gain di'},
    // {title: 'How to defeat bowser', snippet:'lorem ipsum dolend seccnn'},   
    // ];
    // res.render('index', {title: 'Home', blogs});
   // res.sendFile('./views/index.html', {root:__dirname});
 });

app.get('/about-us',(req, res) => {
     res.render('/about');
});
   
  
app.get('/about', (req, res) => {
  // res.send('<p>About Page</p>');
  res.render('about', { title: 'About'});
//res.sendFile('./views/about.html', {root:__dirname}); 
});







app.use('/blogs', blogRoutes)
//404 page 
app.use((req, res) => {
  res.status(404).render('404');
   //  res.status(404).sendFile('./views/404.html', {root: __dirname});

} );







