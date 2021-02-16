import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teststhree',
  templateUrl: './teststhree.component.html',
  styleUrls: ['./teststhree.component.css']
})
export class TeststhreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public rotationX = 0.0;
  public rotationY = 0.0;
  public rotationZ = 0.0;

  public translationY = 0.0;

  public cameraPositionX = 20.0;

  public mouseEnter() {
    console.log('mouseEnter');
  }

  public click() {
    console.log('click');
  }

  public mouseExit() {
    console.log('mouseExit');
  }

}
