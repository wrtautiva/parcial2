import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PicsumService {

  constructor(private httclient: HttpClient) { }

  getPicsum(): Observable<any>{
    return this.httclient.get('https://picsum.photos/v2/list');
  }
}
