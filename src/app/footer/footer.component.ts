import { Component, OnInit } from '@angular/core';
import { Abushett } from '../abushett';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currStudent: Abushett = {
    sid: 991484693,
    sname: "Toka Abu",
    scampus: "Trafal",
    slogin: "abushett",
    stitle: "Assignment3"
  }
  constructor() { }

  ngOnInit() {
  }

}
