import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  timeline = [
    // {
    //   heading: "Infosys",
    //   duration: "Present",
    //   subtitle: "",
    //   content: "Upcoming Full stack develover at Infosys!",
    //   className1: "mar-left",
    //   className2: "prt_about_learnbox_right"
    // },
    {
      heading: "B.Tech - Computer Science & Engineering",
      duration: "2014",
      subtitle: "GGSIPU University, Delhi",
      content: "Successfully completed my B.tech in Computer science from IP University, Delhi.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    },
    {
      heading: "Diploma - Electrical Engineering",
      duration: "2011",
      subtitle: "Board of Technical Education, Delhi",
      content: "Successfully completed my intermediate studies in 2011 from Ambedkar Institute of Technology.",
      className1: "mar-left",
      className2: "prt_about_learnbox_right"
    },
    {
      heading: "Secondary Stage(10th)",
      duration: "2008",
      subtitle: "CBSE Board",
      content: "Successfully completed my high school studies in 2011 from DAV School, Pitam Pura-Delhi.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
