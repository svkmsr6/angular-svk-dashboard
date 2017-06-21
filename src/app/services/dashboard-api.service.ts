import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DashboardApiService {

  constructor(private http:Http) {}

   public getPosts():Observable <any>{
          return this.http.get('https://jsonplaceholder.typicode.com/users')
                            .map((res:any)=>res.json())
                            .catch((error:any)=> {return error.message});
   }
}
