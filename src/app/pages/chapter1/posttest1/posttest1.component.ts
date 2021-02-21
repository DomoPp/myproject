import { Component, OnInit } from '@angular/core';
import { pre1_1 } from '../../data1'


@Component({
  selector: 'app-posttest1',
  templateUrl: './posttest1.component.html',
  styleUrls: ['../pretest1/pretest1.component.css']
})
export class Posttest1Component implements OnInit {

  favor1: string = '';
  state:any = []
  total:number = 0
  pre1 = pre1_1
  myData = JSON.parse(localStorage.getItem('total1_1') || "")
  check = JSON.parse(localStorage.getItem('checks1_1') || "")
  
  
  
  constructor() { }
  
  ngOnInit(): void {
    
  }
  
  a(event: any, i: any,answer:any){
    this.state[i] = event.value
    console.log(this.state,answer);
  }
  b(){
    this.state.forEach((a:any, i:any)=>{
      if (a == this.pre1[i].answer) {
        
        this.total += 1
        localStorage.setItem('total1_1', JSON.stringify(this.total));

        // @ts-ignore
        this.myData = JSON.parse(localStorage.getItem('total1_1') || "")
        
      }
    })
    console.log(this.myData);
    localStorage.setItem('checks1_1', '2');
    this.check = JSON.parse(localStorage.getItem('checks1_1') || "")
    console.log(this.check);
    localStorage.setItem('chapter1','1')
    // localStorage.setItem('checks', 'B');
    // this.check = JSON.parse(localStorage.getItem('checks') || "")

    
  }
  c(){
    this.myData = '0'
    this.total = 0
    localStorage.setItem('total1_1', JSON.stringify(this.total));
    console.log(localStorage.getItem('total1_1'));
  }
  d(){

    
  }
  e(){
    localStorage.setItem('checks1_1', '1');
    this.check = JSON.parse(localStorage.getItem('checks1_1') || "")
    console.log(localStorage.getItem('checks1_1'));
  }

}
