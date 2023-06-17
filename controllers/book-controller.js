const data = require('../data/data.js');
const Comic = require('../models/comic-model');
module.exports = {
    create : (request, response) => {
    //destructuring the information here//
    const newComic = new Comic(title, author, publisher, genre, pages, rating, synopsis, image = request.body)
    // data.push({_id, title, author, publisher, genre, pages, rating, synopsis, image})
    newComic.save()
   response.redirect('/admin-console') 
},
edit : (request, response) => {
    const {id} = request.params
    Comic.findByIdAndUpdate(id, {$set:{title:request.body.title, author:request.body.author, publisher:request.body.publisher, genre:request.body.genre, pages:request.body.pages, rating:request.body.rating, synopsis:request.body.synopsis, image:request.body.image}}),
    { new: true }, err => {
        if (err) {
        return err    
        } else {
        response.redirect('/admin-console')
        }
    //const foundBook = data.find(data => data._id === id)
    //may have to change data to book depending on values inside parentheses

    //form action, should be able to overwrite data//
}},
//update handler will be rewriten to say "book"//
bookDetail : async function (request, response)  {
 
    const {id} = request.params;
    
       await Comic.findOne({id: id }).then(function (foundBook) {    
        response.render('pages/book', {
    foundBook: foundBook
        })
    }).catch(function (error) {
        console.log(error)
    })

    /*const foundBook = data.find(data => data._id === id)
    response.render('pages/book', {foundBook: foundBook} )*/

    //may have to change data to book depending on values inside parentheses
    },

delete : (request, response) => {
    const {id} = request.params;
    Comic.deleteOne({id: id},(err) => {
    if (err) {
        return err
    } else {
        response.redirect('/admin-console') 
    }
}
    )
    /*const foundBook = data.find(data => data._id === String(id))
    const index = data.indexOf(foundBook) 
    data.splice(index , 1 )*/

    //Splice out the comic book from the data//
},

};
