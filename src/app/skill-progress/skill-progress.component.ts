import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-progress',
  templateUrl: './skill-progress.component.html',
  styleUrls: ['./skill-progress.component.scss']
})
export class SkillProgressComponent implements OnInit {

  techStack = {
    viewSkillBars: true,
    experience: [
      {
        Stack: "Frontend/Design",
        progressPercentage: "75%"
      },
      {
        Stack: "Backend",
        progressPercentage: "80%"
      },
      {
        Stack: "System Design",
        progressPercentage: "70%"
      },
      {
        Stack: "Programming",
        progressPercentage: "85%"
      },
      {
        Stack: "Mobile Development",
        progressPercentage: "70%"
      },
      {
        Stack: "Blockchain",
        progressPercentage: "50%"
      }
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

  progressStyle(percentage:string){
    return {    width: percentage}
  }

}
