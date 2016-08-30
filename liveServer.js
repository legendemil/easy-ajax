var liveServer = require("live-server");

var params = {
    port: 8080, // Set the server port. Defaults to 8080.
    open: true, // When false, it won't load your browser by default.
    file: "index.html", // When set, serve this file for every 404 (useful for single-page applications)
    middleware: [function(req, res, next) { next(); }] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
};
liveServer.start(params);