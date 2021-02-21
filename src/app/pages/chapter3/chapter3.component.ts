import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter3',
  templateUrl: './chapter3.component.html',
  styleUrls: ['../chapter1/chapter1.component.css']
})
export class Chapter3Component implements OnInit {

  chapter = JSON.parse(localStorage.getItem('chapter3') || "")

  constructor() { }

  ngOnInit(): void {
  }
  Posttest(){
    localStorage.setItem('chapter3','2')
  }

}
