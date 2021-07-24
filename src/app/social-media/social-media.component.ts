import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  socialMediaLinks = {

    github: "https://github.com/gauravnayyar",
    linkedin: "https://www.linkedin.com/in/gauravnayyar525/",
    gmail: "https://mailto:Nayyar525@gmail.com",
    instagram : "https://www.instagram.com/iamgauravnayyar/",
    facebook: "https://www.facebook.com/gaurav.nayyar.90",
    whatsapp:'https://wa.me/+918130098131?text=Hi%20Gaurav'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
