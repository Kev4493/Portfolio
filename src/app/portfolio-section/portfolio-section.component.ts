import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.scss']
})
export class PortfolioSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  allProjects = true;
  angularProjects = false;
  jsProjects = false;


  showAllProjects() {
    this.allProjects = true;
    this.angularProjects = false;
    this.jsProjects = false;
  }


  showAngularProjects() {
    this.allProjects = false;
    this.angularProjects = true;
    this.jsProjects = false;
  }


  showJsProjects() {
    this.allProjects = false;
    this.angularProjects = false;
    this.jsProjects = true;
  }

}
