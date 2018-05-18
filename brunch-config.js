// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'app.js': /^app/
    }
  },
  stylesheets: {joinTo: 'app.css'}
};

exports.plugins = {
  babel: {presets: ['latest']},
  elmBrunch: {
    // (required) Set to the elm file(s) containing your "main" function `elm make` 
    //            handles all elm dependencies relative to `elmFolder`
    mainModules: ['source/path/YourMainModule.elm'],

    // (optional) Set to keep an independent elm-stuff folder per mainModule. If 
    //            mainModules is an array, then the 'source/path' of each mainModule 
    //            will be appended to your elm-folder, allowing each subfolder to keep their
    //            own set of elm dependencies.
    independentModules: true,

    // (optional) Set to path where `elm-make` is located, relative to `elmFolder`
    executablePath: '../../node_modules/elm/binwrappers',

    // (optional) Set to path where elm-package.json is located, defaults to project root
    //            if your elm files are not in /app then make sure to configure 
    //            paths.watched in main brunch config
    elmFolder: 'path/to/elm-files',

    // (optional) Defaults to 'js/' folder in paths.public
    // relative to `elmFolder`
    outputFolder: 'some/path/',

    // (optional) If specified, all mainModules will be compiled to a single file 
    //            This is merged with outputFolder.
    outputFile: 'elm.js',

    // (optional) add some parameters that are passed to elm-make
    makeParameters: ['--warn']
  }
};
