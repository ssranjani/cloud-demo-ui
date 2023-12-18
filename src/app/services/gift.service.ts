import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiftService {
  private url:string = environment.apiEndpoint;

  constructor(private http: HttpClient) {}

  getGiftsCount() {
    return this.http.get<number>(this.url);
  }


}
