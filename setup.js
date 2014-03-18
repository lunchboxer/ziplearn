'use strict';

var exec = require('child_process').exec,
    sysPath = require('path'),
    fs = require('fs'),
    mode = process.argv[2],
    fsExistsSync = fs.existsSync || sysPath.existsSync,
    emberUrls = {
      common: [
        'http://builds.handlebarsjs.com.s3.amazonaws.com/handlebars-v1.3.0.js'
      ],
      development: [
        'http://builds.emberjs.com/release/ember.js',
        'http://builds.emberjs.com.s3.amazonaws.com/ember-data-latest.js'
      ],
      production: [
        'http://builds.emberjs.com/release/ember.prod.js',
        'http://builds.emberjs.com.s3.amazonaws.com/ember-data-latest.prod.js'
      ]
    };

var getBinaryPath = function(binary) {
  var path;
  if (fsExistsSync(
      path = sysPath.join('node_modules', '.bin', binary))) return path;
  if (fsExistsSync(path = sysPath.join('..', '.bin', binary))) return path;
  return binary;
};

var execute = function(path, params, callback) {
  if (callback == null) callback = function() {};
  var command = path + ' ' + params;
  console.log('Executing', command);
  exec(command, function(error, stdout, stderr) {
    if (error != null) return process.stderr.write(stderr.toString());
    console.log(stdout.toString());
    callback();
  });
};

switch (mode) {
  case 'update:ember':
    for (var env in emberUrls) {
      for (var file in emberUrls[env]) {
        var download = emberUrls[env][file],
            filename = download.split('/').reverse()[0]
                       .replace('.prod', '').replace('-latest', '');

        execute('curl ' + emberUrls[env][file],
                ' > vendor/scripts/' + env + '/' + filename);
      }
    }
    break;

}
