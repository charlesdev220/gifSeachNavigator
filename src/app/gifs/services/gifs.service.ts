//externos
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

//const GIPHY_API_KEY = 'hMRZSLy9LhtkLzf5QHZpnxm1A9eFWmXz';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = [];
  private apiKey: string = 'hMRZSLy9LhtkLzf5QHZpnxm1A9eFWmXz';
  private serviceUrl = 'http://api.giphy.com/v1/gifs';
  public gifList: Gif[] = [];

  constructor( private http: HttpClient) {
    this.loadLocalStorage();
    if(this._tagsHistory.length>0){
      this.searchTag(this._tagsHistory[0]);
    }
  }

  get tagsHistory(){
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string){
    tag = tag.toLocaleLowerCase();

    //eliminando el coincidente
    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter(( oldTag ) => oldTag !== tag);
    }

    //añade al principio del array
    this._tagsHistory.unshift(tag);

    //maximo de elementos
    this._tagsHistory = this._tagsHistory.splice(0,10);
    this.saveLocalStorage();
  }

  private saveLocalStorage():void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage():void {
    if(!localStorage.getItem('history')) return;
    //especificando que siempre vendra data
    this._tagsHistory = JSON.parse(localStorage.getItem('history') ! );
  }


  async searchTag(tag: string) {

    if(tag.length === 0) return;

    this.organizeHistory(tag);

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', tag);

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`,
    {
      params: params
    })
    //me subscribo para escuchar
    .subscribe( resp => {
      this.gifList = resp.data;
      //console.log({gifs: this.gifList});
    })
    //console.log(data);
  }
}
