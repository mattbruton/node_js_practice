const goodreadsService = function() {

    const getBookById = function(id, cb) {
        cb(null, {
            description: 'Our Description'
        });
    };

    return {
        getBookById: getBookById
    };
};

module.exports = goodreadsService;