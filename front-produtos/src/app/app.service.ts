import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { ModelCadastro } from './cadastro/modelcadastro';

@Injectable({
  providedIn: 'root'
})

export class CadastroService {
  reload = false

  constructor(private http: HttpClient) {
  }

  listAll(): Observable<any> {
    return this.http.get(`${environment.api}/cadastro/index`)
  }

  show = (id: string) => this.http.get(`${environment.api}/cadastro/show/${id}`).toPromise()

  create = (body: ModelCadastro) => this.http.post(`${environment.api}/cadastro/store`, body).toPromise()

  update = (id: string, body: ModelCadastro) => this.http.put(`${environment.api}/cadastro/update/${id}`, body).toPromise()

  delete = (id: string) => this.http.delete(`${environment.api}/cadastro/delete/${id}`).toPromise()

}
