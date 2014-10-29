exports.config = 
  plugins: 
    sass: 
      mode: 'ruby',
      allowCache: true
    autoReload: 
      enabled: 
        css: 'on',
        js: 'on',
        assets: 'on'
  paths: 
    watched: ['app', 'vendor', 'test']
  files: 
    javascripts: 
      joinTo: 
        'javascripts/app.js': /^app/,
        'javascripts/vendor.js': /^(vendor\/scripts\/(common|development)|vendor\\scripts\\(common|development))/
      order: 
        before: [
          'vendor/scripts/common/fastclick.js',
          'vendor/scripts/development/jquery.js',
          'vendor/scripts/common/handlebars.js',
          'vendor/scripts/development/ember.js',
          'vendor/scripts/development/ember-data.js'
        ]
    stylesheets: 
      defaultExtension: 'scss',
      joinTo: 
        'stylesheets/app.css': /^(app\/styles)/
    templates: 
      precompile: true,
      root: 'templates',
      joinTo: 
        'javascripts/app.js': /^app/
        
  overrides:
    # Production Settings
    production:
      files:
        javascripts:
          joinTo:
            'javascripts/app.js': /^app/,
            'javascripts/vendor.js': /^(vendor\/scripts\/(common|development)|vendor\\scripts\\(common|development))/
          order:
            before: [
              'vendor/scripts/common/handlebars.js',
              'vendor/scripts/production/jquery.js',
              'vendor/scripts/production/ember.min.js',
              'vendor/scripts/production/ember-data.min.js'
            ]
      optimize: true,
      sourceMaps: false,
      plugins:
        autoReload:
          enabled: false
