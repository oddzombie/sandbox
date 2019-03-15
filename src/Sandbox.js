class Sandbox {
  constructor(scope = {}) {
    this.scope = new Proxy(scope, { has: this.has, get: this.get });
  }

  has() {
    return true;
  }
  get(target, key) {
    return key === Symbol.unscopables ? undefined : target[key];
  }
  set(target, key, value) {
    if (key === Symbol.unscopables) {
      return false;
    }
    target[key] = value;
    return true;
  }

  eval(src) {
    return new Function('scope', `with(scope) { return ${src} }`).bind(this.scope)(this.scope);
  }
}

module.exports = Sandbox;
