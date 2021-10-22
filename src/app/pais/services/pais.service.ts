import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUR: string = 'https://restcountries.com/v3.1';

  get httpParams () { 
    return   new HttpParams().set('fields','name,capital,cca2,flags,population');
   }

  constructor( private http: HttpClient  ) { }


  buscarPais(termino: string): Observable<Country[]> { 

    const url = `${ this.apiUR }/name/${ termino }`
     return this.http.get<Country[]>( url, { params: this.httpParams } );

   }


   buscarCapital(termino: string): Observable<Country[]> { 

    const url = `${ this.apiUR }/capital/${ termino }`
     return this.http.get<Country[]>( url, { params: this.httpParams } );

    }


    getPaisPorCodigo(id: string): Observable<Country> { 

      const url = `${ this.apiUR }/alpha/${ id }`
       return this.http.get<Country>( url );
  
      }


      buscrRegion( region: string): Observable<Country[]> { 
        
        const url = `${ this.apiUR }/region/${ region }`
       return this.http.get<Country[]>( url, { params: this.httpParams } ).pipe(tap(console.log));
      }





}
