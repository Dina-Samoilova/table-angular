import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Orders } from '../Orders';
import * as Order from '../api.json';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  constructor(private http: HttpClient) { }

  getTableData(): Observable<Orders>{
    const order = of(Order);

    return order;
  }
}
