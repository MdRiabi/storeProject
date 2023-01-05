import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../common/book";
import {map, Observable} from "rxjs";

interface  GetResponseBooks{
  _embedded:{
    books:Book[]
  }
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl ="http://localhost:8080/api/v1/";

  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<Book[]>{
    return this.httpClient.get<GetResponseBooks>(this.baseUrl).pipe(
      map(response => response._embedded.books)

    )

  }

}
