var livereload = require('livereload');
var reloadServer = livereload.createServer();

reloadServer.config.exts.push("twig");

reloadServer.watch([
	__dirname + "/",
]);
