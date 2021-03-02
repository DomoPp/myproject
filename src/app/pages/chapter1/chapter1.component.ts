import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter1',
  templateUrl: './chapter1.component.html',
  styleUrls: ['./chapter1.component.css']
})
export class Chapter1Component implements OnInit {

  chapter = JSON.parse(localStorage.getItem('chapter1') || "")

  constructor() { }

  ngOnInit(): void {
    if(this.chapter=='1'){
      localStorage.setItem('checks1_1','1') 
    }
  }
  Posttest(){
    localStorage.setItem('chapter1','2')
  }

}
