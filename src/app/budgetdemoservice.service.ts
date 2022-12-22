import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetdemoserviceService {

  constructor(private http: HttpClient) { }

  readonly budgeturl = "http://10.0.2.85/BudgetDemo/api"

  getBudgetList(): Observable<any[]> {
    return this.http.get<any>(this.budgeturl + '/Budget/Budget');
  }

  getBudgetById(id: number | string) {
    return this.http.get<any>(this.budgeturl + `/Budget/Budget/${id}`);
  }
  addBudget(data: any) {
    return this.http.post(this.budgeturl + '/Budget/AddBudget', data, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': "application/json"
      }
    })
  }
  updateBudget(id: number | string, data: any) {
    return this.http.put(this.budgeturl + `/Budget`, data);
  }

  deleteBudget(id: number ) {
    return this.http.delete(this.budgeturl + `/Budget/DeleteBudget/${id}`);
  }

  getBudgetDataList(): Observable<any[]> {
    return this.http.get<any>(this.budgeturl + '/BudgetData/Budget');
  }

  getBudgetDataById(id: number | string) {
    return this.http.get<any>(this.budgeturl + `/BudgetData/Budget/${id}`);
  }
  addBudgetData(data: any) {
    return this.http.post(this.budgeturl + '/BudgetData/AddBudget', data, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': "application/json"
      }
    })
  }

  updateDataBudget(id: number | string, data: any) {
    return this.http.put(this.budgeturl + `/BudgetData/UpdateBudget/${id}`, data);
  }
  deleteBudgetData(id: number ) {
    return this.http.delete(this.budgeturl + `/BudgetData/DeleteBudget/${id}`);
  }

  download(fileName:any){
    return this.http.get(`http://10.0.2.85/BudgetDemo/api/UploadFile/download/${fileName}`, {responseType:'blob'});
  }

}
