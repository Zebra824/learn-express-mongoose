let BookInstance = require('../models/bookinstance');

exports.show_all_books_status = function(res) {

  BookInstance.find({'status': {$eq: 'Available'}})
      .populate('book').exec()
      .then(list_bookInstances => {
        res.send(list_bookInstances.map(function(bookInstance){
          return bookInstance.book.title + ":" + bookInstance.book.status;
        }));
      })
      .catch(err => res.send("Status not found"));
};