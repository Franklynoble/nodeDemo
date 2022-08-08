
const express = require('express');

const blogController = require('../controllers/blogController')

const router = express.Router();






 //route to display blog
 router.get('/',blogController.blog_index);

 // send rendered blog form to database, send  and save  to database
 router.post('/', blogController.blog_create_post);

  //render a  blog form to fill
 router.get('/create', blogController.blog_create_get );
   
 //select individual blog
 router.get('/:id', blogController.blog_details)// pass in route params
 
 //delete  individual blog
  router.delete('/:id', blogController.blog_delete);
    

  
module.exports = router;