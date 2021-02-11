/*eslint-disable*/
export class KanyeQuote {
  static getKQuote() {
    return fetch(`https://api.kanye.rest?format=json`)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch(function(error) {
      return error;
    });
  }
}

export class TaylorQuote {
  static getTQuote() {
    return fetch(`https://api.taylor.rest?format=json`)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch(function(error) {
      return error;
    });
  }
}