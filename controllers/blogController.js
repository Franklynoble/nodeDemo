
const Blog = require('../models/blogs');
//
// blog_index , blog_details, blog_create_get, blog_create_post, blog_delete


 //list all blogs
const blog_index = (req, res) => {

     Blog.find().sort({createdAt: -1})
     .then(result => {
       res.render('blogs/index', { blogs: result, title: 'All blogs'});
     })
     .catch(err => {
       console.log(err);
     });
    }


    //get a  single blog
    const blog_details = (req, res) => {

     const id = req.params.id;
     // console.log(id);
      Blog.findById(id).then(result => {
      res.render('blogs/details', {blog: result, title: 'Blog Details'})
      })
      .catch(err => {
        res.status(404).render('404', {title: 'blog not found'});
      });
     }



     // render a  blog form
     const blog_create_get =(req, res)  => {

              
  res.render('blogs/create', {title: "create New blog"});
}



// send  the rendered bloged form
const  blog_create_post =(req, res) => {
     const blog = new Blog(req.body)
     blog.save()
     .then(result => {
       res.redirect('/blogs');
     }).catch((err) => {
       console.log(err);
     })
}


// delete a specific blog form
const  blog_delete = (req, res) => {
     const id = req.params.id;
     Blog.findByIdAndDelete(id)
     .then(result => {
       res.json({redirect: '/blogs'});
     })
     .catch(err => {
       console.log(err);
     })
     
}
 
   
// export all the controllers forms to routes
     module.exports = {
          blog_details,
          blog_index,
          blog_create_get,
          blog_create_post,
          blog_delete
     }
    