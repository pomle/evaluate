const backend = process.client ? window.localStorage : null;

class LocalPersistentStorage {
  constructor(namespace) {
    this.ns = namespace;
  }

  key(key) {
    return `${this.ns}_${key}`;
  }

  fetch(key) {
    const blob = backend.getItem(this.key(key));
    if (!blob) {
      return null;
    }
    return JSON.parse(blob);
  }

  store(key, data) {
    const blob = JSON.stringify(data);
    backend.setItem(this.key(key), blob);
  }
}

export default LocalPersistentStorage;
