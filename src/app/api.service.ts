import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Books } from './API/API';
import { Observable,map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Books[]> {
    return this.http.get<any>('https://openlibrary.org/api/books?bibkeys=ISBN%3A0201558025%2CLCCN%3A93005405&format=json').pipe(
      map(response => {
        return response.Results as Books[];
      })
    );
  }
}
