/**
 * Created by jackieluo on 2017/3/30.
 */

import reqwest from 'reqwest'

const url = 'https://v.html5.qq.com/api/carddatanew?card_id=282&ver=1&network=wifi&_t=1490935456992&ch=881123';

export default {
  getList(cardId, callback){
    // reqwest({
    //   url: url,
    //   headers: {
    //     'X-Requested-With': 'XMLHttpRequest'
    //   }
    // })
    //   .then(val => callback(null, val))
    //   .catch(e => callback(e))
    var data = null;

    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        var dataJson = JSON.parse(this.responseText);
        dataJson.data.shift();
        callback(null, dataJson);
      }
    });

    xhr.open("GET", "https://v.html5.qq.com/api/carddatanew?card_id=" + cardId + "&ver=1&network=wifi&_t=1490935456992&ch=881123");
    xhr.send(data);
  }
}
