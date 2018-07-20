import { Component, OnInit } from '@angular/core';

import { JobsService } from "../jobs.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private jobs: JobsService) { }

  showJobs(){
    this.jobs.getJobs()
    .subscribe()
  }

  ngOnInit() {
  }

}
