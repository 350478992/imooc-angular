import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";

@Injectable()
export class StockService {


  constructor(public http: Http) {
  }

  getStocks(): Observable<Stock[]> {
    return this.http.get("/api/stock")
        .map(
          resp => resp.json()
        );
  }

  getStock(id: number): Observable<Stock> {
    return this.http.get("/api/stock/" + id).map(resp => resp.json());
  }

}


export class Stock {
  constructor(public id: number,
              public name: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {
  }
}
