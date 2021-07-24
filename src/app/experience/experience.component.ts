import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public workExperiences = {
    viewExperiences: true,
    experience: [
      {
        role: "Senior Full Stack Engineer",
        company: "SAP",
        color: "#3781c2",
        companylogo: "assets/images/Sap.jpg",
        date: "June 2021 - Present",
        // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        desc: "Part of Business Technology Platform Team",
        // descBullets: [
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        // ]
      },
      {
        role: "Senior Full Stack Engineer/Game Developer",
        company: "Aristocrat Technology",
        color: "#000000",
        companylogo: "assets/images/aristocrat.jpg",
        date: "Jan 2020 – Jul 2021",
        desc: "Developed casino based digital games and Mobile based application for android and ios",
        // descBullets: [
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        // ]
      },
      {
        role: "Associate",
        company: "Cognizant",
        color: "#0033a0",
        companylogo: "assets/images/Cognizant.png",
        date: "April 2015 – Dec 2019",
        desc: "Worked with multiple items with multiple teams in different domain like BFS, Retail, Life science.",
        },
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
