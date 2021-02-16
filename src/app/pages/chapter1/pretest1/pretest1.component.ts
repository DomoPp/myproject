import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pretest1',
  templateUrl: './pretest1.component.html',
  styleUrls: ['./pretest1.component.css']
})
export class Pretest1Component implements OnInit {

  favoriteSeason: string = '';
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  constructor() { }

  ngOnInit(): void {
  }


}
