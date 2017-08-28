// Generated by CoffeeScript 1.12.5
(function() {
  var Adapter, JSX, W, path, sourcemaps,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Adapter = require('../../adapter_base');

  sourcemaps = require('../../sourcemaps');

  path = require('path');

  W = require('when');

  JSX = (function(superClass) {
    var compile;

    extend(JSX, superClass);

    function JSX() {
      return JSX.__super__.constructor.apply(this, arguments);
    }

    JSX.prototype.name = 'jsx';

    JSX.prototype.extensions = ['jsx'];

    JSX.prototype.output = 'js';

    JSX.prototype.supportedEngines = ['react-tools'];

    JSX.prototype.isolated = true;

    JSX.prototype._render = function(str, options) {
      if (options.sourcemap === true) {
        options.sourceMap = true;
        options.sourceFilename = options.filename;
      }
      return compile(options, (function(_this) {
        return function() {
          return _this.engine.transformWithDetails(str, options);
        };
      })(this));
    };

    compile = function(opts, fn) {
      var data, err, res;
      try {
        res = fn();
      } catch (error) {
        err = error;
        return W.reject(err);
      }
      if (res.sourceMap) {
        data = {
          result: res.code,
          sourcemap: res.sourceMap
        };
        data.sourcemap.sources.pop();
        data.sourcemap.sources.push(opts.filename);
        return sourcemaps.inline_sources(data.sourcemap).then(function(map) {
          data.sourcemap = map;
          return data;
        });
      } else {
        return W.resolve({
          result: res.code
        });
      }
    };

    return JSX;

  })(Adapter);

  module.exports = JSX;

}).call(this);
