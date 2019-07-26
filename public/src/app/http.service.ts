import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAll=()=>{
    return this._http.get('/api/managers');
  };
  getOne=(id:string)=>{
    return this._http.get(`/api/managers/${id}`);
  };
  postOne=(newProduct:any)=>{
    return this._http.post(`/api/managers`,newProduct);
  };
  updateOne=(id:string,product:any)=>{
    return this._http.put(`/api/managers/edit/${id}`,product);
  };
  destroy=(id:string)=>{
    return this._http.delete(`/api/managers/${id}`);
  };
}
