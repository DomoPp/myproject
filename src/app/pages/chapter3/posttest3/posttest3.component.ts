import { Component, OnInit } from '@angular/core';
import { pre3_3 } from '../../data3'

@Component({
  selector: 'app-posttest3',
  templateUrl: './posttest3.component.html',
  styleUrls: ['../../chapter1/pretest1/pretest1.component.css']
})
export class Posttest3Component implements OnInit {

  favor1: string = '';
  state:any = []
  total:number = 0
  work = pre3_3
  myData = JSON.parse(localStorage.getItem('total3_3') || "")
  check = JSON.parse(localStorage.getItem('checks3_3') || "")

  constructor() { }

  ngOnInit(): void {
  }

  a(event: any, i: any,answer:any){
    this.state[i] = event.value
    console.log(this.state,answer);
  }
  b(){
    this.state.forEach((a:any, i:any)=>{
      if (a == this.work[i].answer) {
        
        this.total += 1
        localStorage.setItem('total3_3', JSON.stringify(this.total));

        // @ts-ignore
        this.myData = JSON.parse(localStorage.getItem('total3_3') || "")
        
      }
    })
    console.log(this.myData);
    localStorage.setItem('checks3_3', '2');
    this.check = JSON.parse(localStorage.getItem('checks3_3') || "")
    console.log(this.check);
    localStorage.setItem('chapter3','1')
    
    // localStorage.setItem('checks', 'B');
    // this.check = JSON.parse(localStorage.getItem('checks') || "")

    
  }
  c(){
    this.myData = '0'
    this.total = 0
    localStorage.setItem('total3_3', JSON.stringify(this.total));
    console.log(localStorage.getItem('total3_3'));
  }
  d(){

    
  }
  e(){
    localStorage.setItem('checks3_3', '1');
    this.check = JSON.parse(localStorage.getItem('checks3_3') || "")
    console.log(localStorage.getItem('checks3_3'));
  }

}
