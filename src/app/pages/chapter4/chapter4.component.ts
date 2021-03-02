import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter4',
  templateUrl: './chapter4.component.html',
  styleUrls: ['../chapter1/chapter1.component.css']
})
export class Chapter4Component implements OnInit {

  chapter = JSON.parse(localStorage.getItem('chapter4') || "")

  constructor() { }

  ngOnInit(): void {
    if(this.chapter=='1'){
      localStorage.setItem('checks4_4','1') 
    }
  }
  Posttest(){
    localStorage.setItem('chapter4','2')
  }
}
