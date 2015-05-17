const masterKey = Symbol("decogen-key");

export function makeDecorator(opts: any, defaults: any): any {
  function annotate(data) {
    function fn(target, key) {
      var store = target[rootKey] || (target[rootKey] = {});
      store[key] = data;
    }

    function make(name, mods) {
      Object.defineProperty(fn, name, {
        get: function() {
          var newData = {};
          for(let k in data) {
            newData[k] = data[k];
          }
          for(let k in mods) {
            newData[k] = mods[k];
          }
          return annotate(newData);
        }
      });
    }

    for(let n in opts) {
      make(n, opts[n]);
    }
    return fn;
  }

  var rootKey = Symbol("decogen-decorations");
  var root = annotate(defaults || {});
  root[masterKey] = rootKey;
  return root;
}

export function getDecorations(root: any, target: any): any {
  var rootKey = root[masterKey];
  return rootKey && target.prototype[rootKey] || null;
}
