import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  private apiUrl = 'https://freeapi.miniprojectideas.com/api/BigBasket/GetAllProducts'
  constructor(private http:HttpClient) {
}

  getAllProducts(){
    return this.http.get(this.apiUrl)
  }
}
