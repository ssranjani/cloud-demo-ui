import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GiftService {
  private url:string = 'http://localhost:8080/api/v1/gifts';

  constructor(private http: HttpClient) { }

  getGiftsCount() {
    return this.http.get<number>(this.url);
  }


}
