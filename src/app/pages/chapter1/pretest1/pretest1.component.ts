import { Component, OnInit } from '@angular/core';
import { pre1 } from '../../pre1'


@Component({
  selector: 'app-pretest1',
  templateUrl: './pretest1.component.html',
  styleUrls: ['./pretest1.component.css']
})
export class Pretest1Component implements OnInit {

  favor1: string = '';
  state:any = []
  total:number = 0
  pre1 = pre1
  myData = JSON.parse(localStorage.getItem('total') || "")
  check = JSON.parse(localStorage.getItem('checks') || "")
  
  
  
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
        localStorage.setItem('total', JSON.stringify(this.total));

        // @ts-ignore
        this.myData = JSON.parse(localStorage.getItem('total') || "")
        
      }
    })
    console.log(this.myData);
    localStorage.setItem('checks', '2');
    this.check = JSON.parse(localStorage.getItem('checks') || "")
    console.log(this.check);
    
    // localStorage.setItem('checks', 'B');
    // this.check = JSON.parse(localStorage.getItem('checks') || "")

    
  }
  c(){
    this.myData = '0'
    this.total = 0
    localStorage.setItem('total', JSON.stringify(this.total));
    console.log(localStorage.getItem('total'));
  }
  d(){

    
  }
  e(){
    localStorage.setItem('checks', '1');
    this.check = JSON.parse(localStorage.getItem('checks') || "")
    console.log(localStorage.getItem('checks'));
  }

}
