import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }


  getallrest(){
    return this._http.get('/restaurants')
  }
  
  addRest(newrest){
    return this._http.post('/restaurants', newrest)
  }

  delrest(id){
    return this._http.delete('restaurants/'+id)
  }

  addreview(currestid, newreview){
    return this._http.post('/restaurants/'+ currestid, newreview)
  }

  allreviews(currestid){
    return this._http.get('/getreviews/'+currestid)
  }

  findcurrest(id){
    return this._http.get('/findrest/'+id)
  }

  editrest(id, newrestinfo){
    return this._http.put('/updaterest/'+id, {info: newrestinfo})
  }
}
