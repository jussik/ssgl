const masterKey = Symbol("decogen-key");

export function makeDecorator(opts: any): any {
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
  var root = annotate({});
  root[masterKey] = rootKey;
  console.log(root);
  return root;
}

export function getDecorations(root: any, target: any): any {
  return target.prototype[root[masterKey]];
}
