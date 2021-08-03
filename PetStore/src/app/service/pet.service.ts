import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Pet } from '../models/pet';


import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, max, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PetService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private baseUrl = 'https://petstore.swagger.io/v2/pet'
  private petsUrl = 'https://petstore.swagger.io/v2/pet/findByStatus?status=team2';  // URL to web api

  // get all pets
  getPets(): Observable<Pet[]> {
    // Seems like some bug with api, response has two side(A/B), 
    // you will get like ABABABA when you request same api again and again
    // just like it has odd/even side
    // so before return target response, 
    this.http.get(this.petsUrl).subscribe()
    this.http.get<Pet[]>(this.petsUrl)
    return this.http.get<Pet[]>(this.petsUrl)
    .pipe(
      tap(_ => this.log('fetched pets')),
      catchError(this.handleError<Pet[]>('getPets', []))
    );
  }

  // get pet by id
  getPet(id: number): Observable<Pet> {
    const url = `${this.baseUrl}/${id}`
    this.http.get(url).subscribe()
    return this.http.get<Pet>(url)
    .pipe(
      tap(_ => this.log(`fetched pet id=${id}`)),
      catchError(this.handleError<Pet>(`getPet id=${id}`))
    )
  }

  /** PUT: update the pet on the server */
  updatePet(pet: Pet): Observable<any> {
    this.http.put(this.baseUrl, pet, this.httpOptions).subscribe()
    return this.http.put(this.baseUrl, pet, this.httpOptions).pipe(
      tap(_ => this.log(`updated pet id=${pet.id}`)),
      catchError(this.handleError<any>('updatePet'))
    );
  }

  /** POST: add a new pet to the server */
  addPet(pet: Pet): Observable<Pet> {
    this.http.post<Pet>(this.baseUrl, pet, this.httpOptions).subscribe()
    return this.http.post<Pet>(this.baseUrl, pet, this.httpOptions).pipe(
      tap((newPet: Pet) => this.log(`added pet w/ id=${newPet.id}`)),
      catchError(this.handleError<Pet>('addPet'))
    );
  }

  /** DELETE: delete the hero from the server */
  deletePet(id: number): Observable<Pet> {
    const url = `${this.baseUrl}/${id}`;
    this.http.delete<Pet>(url, this.httpOptions).subscribe()
    return this.http.delete<Pet>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted pet id=${id}`)),
      catchError(this.handleError<Pet>('deletePet'))
    );
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
