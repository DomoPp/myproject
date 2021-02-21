import { Component, OnInit } from '@angular/core';
import { pre4_4 } from '../../data4'

@Component({
  selector: 'app-posttest4',
  templateUrl: './posttest4.component.html',
  styleUrls: ['../../chapter1/pretest1/pretest1.component.css']
})
export class Posttest4Component implements OnInit {

  favor1: string = '';
  state:any = []
  total:number = 0
  work = pre4_4
  myData = JSON.parse(localStorage.getItem('total1') || "")
  check = JSON.parse(localStorage.getItem('checks1') || "")

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
        localStorage.setItem('total1', JSON.stringify(this.total));

        // @ts-ignore
        this.myData = JSON.parse(localStorage.getItem('total1') || "")
        
      }
    })
    console.log(this.myData);
    localStorage.setItem('checks1', '2');
    this.check = JSON.parse(localStorage.getItem('checks1') || "")
    console.log(this.check);
    localStorage.setItem('chapter4','1')
    // localStorage.setItem('checks', 'B');
    // this.check = JSON.parse(localStorage.getItem('checks') || "")

    
  }
  c(){
    this.myData = '0'
    this.total = 0
    localStorage.setItem('total1', JSON.stringify(this.total));
    console.log(localStorage.getItem('total1'));
  }
  d(){

    
  }
  e(){
    localStorage.setItem('checks1', '1');
    this.check = JSON.parse(localStorage.getItem('checks1') || "")
    console.log(localStorage.getItem('checks1'));
  }

}
