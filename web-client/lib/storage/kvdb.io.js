const ENDPOINT = 'https://kvdb.io';
const BUCKET = 'VHHuc5GGJjFAM6z7q1at5z';

class KVDBStorage {
  constructor() {
    this.endpoint = ENDPOINT;
  }

  fetch(key) {
    const url = [this.endpoint, BUCKET, key].join('/');
    return fetch(url).then(r => r.text());
  }

  store(key, value) {
    const url = [this.endpoint, BUCKET, key].join('/');
    return fetch(url, { method: 'POST', body: value });
  }
}

export default KVDBStorage;
