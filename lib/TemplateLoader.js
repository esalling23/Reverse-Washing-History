var fs = require('fs');
var handlebars = require('keystone').get('handlebars');
var rootDir = require('app-root-path');

module.exports = {

  Load: function(filePath, data, callback) {

    handlebars
    .render(rootDir + '/templates/' + filePath + '.hbs', data)
    .then(function(res) {
      
        callback(res);

    })
    .catch(function(err) {

    	console.error("TemplateLoader ERROR", err);
    
    });

  }

};