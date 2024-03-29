import { Injectable } from '@angular/core';
import {Http,RequestOptions, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

// localhost
// let apiUrl = 'http://localhost:5000/';
// Act Network
// let apiUrl = 'http://192.168.1.50:5000/'; 
// Intra network
let apiUrl = 'http://192.168.0.111:5000/';
// Other networks
// let apiUrl = 'http://202.83.18.101:5000/';

@Injectable()
export class RestProvider {

  constructor(private http:Http, private HttpClient:HttpClient) {
    console.log('Hello RestProvider Provider');
  }

// Slot booking App
// Get() methods
getLocate() {
  return new Promise(resolve => {
    this.HttpClient.get(apiUrl+'places').subscribe(data => {
      resolve(data);
      console.log(data);
    }, err => {
      console.log(err);
    });
  });  
}

getTripbusDetails() {
  return new Promise(resolve => {
    this.HttpClient.get(apiUrl+'tripbusdetails').subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });  
}

getfromlocation(trip) {
  return new Promise(resolve => {
    this.HttpClient.get(apiUrl+'getfromlocationdetails?bustrip_id='+trip).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });  
}

gettolocation(trip) {
  return new Promise(resolve => {
    this.HttpClient.get(apiUrl+'gettolocationdetails?bustrip_id='+trip).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });  
}

getbusticketdetails(bustrip_id)
{
    return new Promise(resolve => {
      this.HttpClient.get(apiUrl+'getbusticketdetails?bustrip_id='+bustrip_id).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    }); 
}

confirmseats(seats) {
  return new Promise(resolve => {
    this.HttpClient.get(apiUrl+'confirmseats?seats='+seats).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });  
}

getbus(fromtoloc)
{
    return new Promise(resolve => {
      this.HttpClient.get(apiUrl+'getbus?fromtoloc='+fromtoloc).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    }); 
}

getUser(id) {
  return new Promise(resolve => {
    this.HttpClient.get(apiUrl+'user/'+id).subscribe(data => {
      // console.log(data);
      resolve(data);
    }, err => {
      console.log(err);
    });
  });  
}


/*----------------------------------------------------------------------------------------------------------*/
// Post() methods

// LOGIN API
 doLogin(formdata,cb) {
    let headers = new Headers({
            'Content-type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json, text/plain, */*'
        });
        let options = new RequestOptions({ headers: headers });

      this.http
          .post(apiUrl+'bmtcslotlogin', formdata, options)
          .subscribe(data => 
          {
            cb(data);
                 
          }, error => {
                      console.log(JSON.stringify(error.json()));
          });
  }

  doSignUp(formdata,cb) {
    let headers = new Headers({
            'Content-type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json, text/plain, */*'
        });
        let options = new RequestOptions({ headers: headers });

      this.http
          .post(apiUrl+'signup/', formdata, options)
          .subscribe(data => 
          {
            cb(data);
                
          }, error => {
                      console.log(JSON.stringify(error.json()));
          });
  }

  doedit(formdata,cb) {
    let headers = new Headers({
            'Content-type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json, text/plain, */*'
        });
        let options = new RequestOptions({ headers: headers });

      this.http
          .post(apiUrl+'editprofile/', formdata, options)
          .subscribe(data => 
          {
            cb(data);
                
          }, error => {
                      console.log(JSON.stringify(error.json()));
          });
  }
}

        