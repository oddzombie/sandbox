class Sandbox {
  constructor(scope = {}) {
    this.proxy = new Proxy(scope, { has: this.has, get: this.get });
  }

  has() {
    return true;
  }
  get(target, key) {
    return key === Symbol.unscopables ? undefined : target[key];
  }

  eval(src) {
    return new Function('sandbox', `with(sandbox) { return ${src} }`).bind(this.proxy)(this.proxy);
  }
}

module.exports = Sandbox;
