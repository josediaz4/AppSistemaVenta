import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { ResponseApi } from '../Inferfaces/response-api';

@Injectable({
  providedIn: 'root'
})
export class DashBoardService {

  private urlApi:string = environment.endpoint + "DashBoard/"

  constructor(private http:HttpClient) { }

  reporte():Observable<ResponseApi>{
    return this.http.get<ResponseApi>(`${this.urlApi}Reporte`)
  }
}
