import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { ResponseApi } from '../Inferfaces/response-api';

//<ResponseApi>
//``

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private urlApi:string = environment.endpoint +"Rol/"

  constructor(private http:HttpClient) { }

  lista():Observable<ResponseApi>{
    return this.http.get<ResponseApi>(`${this.urlApi}Lista`)
  }
}
