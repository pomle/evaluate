class LocalPersistentStorage {
  constructor(namespace) {
    this.ns = namespace;
    this.backend = window.localStorage;
  }

  key(key) {
    return `${this.ns}_${key}`;
  }

  fetch(key) {
    const blob = this.backend.getItem(this.key(key));
    if (!blob) {
      return null;
    }
    return JSON.parse(blob);
  }

  store(key, data) {
    const blob = JSON.stringify(data);
    this.backend.setItem(this.key(key), blob);
  }
}

export default LocalPersistentStorage;
