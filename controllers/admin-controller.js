//const data = require('../data/data');
const Comic = require('../models/comic-model');
module.exports = {
   /* admin_console : (request, response) => {
        //response.render('pages/admin')
        //Bypass authentication
        if (request.isAuthenticated()) {
        Comic.find({}, (err, comics) => {
            if (err) {
                return err
            } else {
                response.render('pages/admin', {comics:comics}) 
                //data:data
            }
        })
        }
        //End authentication   
    },
    */

    admin_console: (request, response) => {
        response.render('pages/admin', {/*comics: comics*/});
      },

    //Replace data with comicSchema?



    create_book : (request, response) => {
        response.render('pages/create')
    },

    /*update : (request, response) => {
        const {id} = request.params;
        Comic.findOne({id: id}, (err, foundBook) => {
            if (err) {
                return err
            } else {
                response.render('pages/update', {foundBook : foundBook}) 
            }

        })
       // const foundBook = data.find(data => data._id === String(id))
        
    },*/

    update: (request, response) => {
        response.render('pages/index', {foundBook: foundBook});
      },
};