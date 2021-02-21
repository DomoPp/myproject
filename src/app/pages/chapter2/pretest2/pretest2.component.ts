import { Component, OnInit } from '@angular/core';
import { pre2 } from '../../data2'


@Component({
  selector: 'app-pretest2',
  templateUrl: './pretest2.component.html',
  styleUrls: ['../../chapter1/pretest1/pretest1.component.css']
})
export class Pretest2Component implements OnInit {

  favor1: string = '';
  state:any = []
  total:number = 0
  work = pre2
  myData = JSON.parse(localStorage.getItem('total2') || "")
  check = JSON.parse(localStorage.getItem('checks2') || "")

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
        localStorage.setItem('total2', JSON.stringify(this.total));

        // @ts-ignore
        this.myData = JSON.parse(localStorage.getItem('total2') || "")
        
      }
    })
    console.log(this.myData);
    localStorage.setItem('checks2', '2');
    this.check = JSON.parse(localStorage.getItem('checks2') || "")
    console.log(this.check);
    localStorage.setItem('chapter2','1')
    
    // localStorage.setItem('checks', 'B');
    // this.check = JSON.parse(localStorage.getItem('checks') || "")

    
  }
  c(){
    this.myData = '0'
    this.total = 0
    localStorage.setItem('total2', JSON.stringify(this.total));
    console.log(localStorage.getItem('total2'));
  }
  d(){

    
  }
  e(){
    localStorage.setItem('checks2', '1');
    this.check = JSON.parse(localStorage.getItem('checks2') || "")
    console.log(localStorage.getItem('checks2'));
  }

}
