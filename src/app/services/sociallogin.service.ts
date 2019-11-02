import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SocialloginService {
  url;
  constructor(private http: HttpClient) { }

  saveResponse(response) {
    this.url = 'http://localhost:64726/Api/Login/Saveresponse';
    return this.http.post(this.url, response);
  }
}
