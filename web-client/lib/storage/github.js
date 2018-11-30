const ENDPOINT = 'https://raw.githubusercontent.com';

class GitHubStorage {
  constructor() {
    this.endpoint = ENDPOINT;
  }

  fetchBlob(path) {
    const url = [this.endpoint, path].join('/');
    return fetch(url).then(r => r.text());
  }
}

export default GitHubStorage;
