import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsSection = {
    title: "What I doðââï¸",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
      "â¡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
      "â¡ Creating application backend in Node, Express & Flask",
      "â¡ Progressive Web Applications ( PWA ) in normal and SPA Stacks",
      "â¡ Integration of third party services such as Firebase/ Heroku/ AWS",
      "â¡ Experience of working with Computer Vision and NLP projects"
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
