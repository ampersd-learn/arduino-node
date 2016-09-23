var url = require('url');

module.exports = function (req, res) {
    var urlParsed = url.parse(req.url, true);


    if (req.method == 'GET' && urlParsed.pathname == '/echo' &&
        urlParsed.query.message) {
        var message = urlParsed.query.message;
        res.end(message);
        return;
    }

    res.statusCode = 404;
    res.end("Not Found");
};