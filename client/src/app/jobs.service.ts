import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private jobsUrl = "http://localhost:5000/api/jobs";

  constructor(private http: HttpClient) { }

  getJobs(){
    return this.http.get<any>(this.jobsUrl)
  }

}
