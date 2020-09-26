import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImdbApiService {
  apiKey = '7caf55bc17mshf41a874c2e284e2p110326jsn58bdd8daaf36';

  constructor() {}

  fetchData(queryString) {
    const data = (queryString) => {
      var data = null;

      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
          console.log(this.responseText);
        }
      });

      xhr.open(
        'GET',
        `https://imdb8.p.rapidapi.com/title/auto-complete?q=${queryString}`
      );
      xhr.setRequestHeader('x-rapidapi-host', 'imdb8.p.rapidapi.com');
      xhr.setRequestHeader(
        'x-rapidapi-key',
        '7caf55bc17mshf41a874c2e284e2p110326jsn58bdd8daaf36'
      );

      xhr.send(data);

      return xhr;
    };
    console.log('data is ', data);
  }
}
