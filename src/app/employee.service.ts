import { Injectable } from '@angular/core';
import { Employee } from './employee';
// import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: Http) { }

  getEmployeeDetails() {
    return this.http.get('http://localhost:3000/api/details').pipe(map((response: any) => response.json()));
    
  }
  postEmployeeDetail(add){
    return this.http.post('http://localhost:3000/api/detail', add).pipe(map((response: any) => response.json()));

  }
  updateEmployee(update){
    return this.http.put('http://localhost:3000/api/detail/'+update._id, update).pipe(map((response: any) => response.json()));
  }
  deleteEmployee(detail){
    return this.http.delete('http://localhost:3000/api/detail/'+detail).pipe(map((response: any) => response.json()));
  }
}
