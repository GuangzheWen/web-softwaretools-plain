import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { catchError, map, max, tap } from 'rxjs/operators';
import { ApiResponse } from '../models/apiResponse';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private baseUrl = 'https://petstore.swagger.io/v2/user'

  // create a new user account
  addUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, user, this.httpOptions)
      .pipe(
        tap(res => {
          if (res.code == 200){
            this.log(`added user with username: ${user.username}`)
          }
        }),
        catchError(this.handleError<ApiResponse>('addUser'))
      )
  }

  // login check 
  login(user: User) : Observable<ApiResponse>  {
    let url = `${this.baseUrl}/login?${user.username}:${user.password}`
    return this.http.get<ApiResponse>(url, this.httpOptions)
    .pipe(
      tap(res => {
        if (res.code == 200){
          this.log(`user with username: ${user.username} logged in succeed`)
        }
      }),
      catchError(this.handleError<ApiResponse>('user login'))
    )
  }

  // get user info by username
  getUser(useranme: string): Observable<User> {
    let url = `${this.baseUrl}/${useranme}`
    return this.http.get<User>(url, this.httpOptions)
    .pipe(
      tap(user => {
          this.log(`user with username: ${user.username} info shows here`)
      }),
      catchError(this.handleError<User>('user info'))
    )
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /** Log a PetService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`PetService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
