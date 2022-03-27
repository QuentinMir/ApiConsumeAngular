import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produit} from "../models/produit";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  endpoint: string = 'https://localhost:8000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Produit[]> {
    return this.httpClient.get<Produit[]>(this.endpoint + '/produits.json', {
      headers:this.headers
    });
  }
}
