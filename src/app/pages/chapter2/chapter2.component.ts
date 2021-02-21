import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter2',
  templateUrl: './chapter2.component.html',
  styleUrls: ['../chapter1/chapter1.component.css']
})
export class Chapter2Component implements OnInit {

  chapter = JSON.parse(localStorage.getItem('chapter2') || "")

  constructor() { }

  ngOnInit(): void {
  }
  Posttest(){
    localStorage.setItem('chapter2','2')
  }

}
