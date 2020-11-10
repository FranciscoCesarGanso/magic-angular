import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class Buscar_cartasService{
	public url: string;
	public params;
	constructor(public _http:HttpClient){
		this.url='https://localhost:5001/';
	}
	getCarta(card):Observable<any>{
		this.params = new HttpParams().set('name', card);
	
		return this._http.get(this.url+'api/card/search',{params:this.params});
	}
}