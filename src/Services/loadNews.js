let data = require('../Services/newsObjects.json');

export function getNewsObjects() {
    
    const promise = new Promise((resolve, rejected) => {
      setTimeout(() => {
        resolve(data);
      }, 10);
    });
  
    return promise;
  }


  export function dataFromJSON(){
     return fetch('/airKiosk/newsObjects.json')
                  .then(res => 
                    { 
                      return res.json()});
  }