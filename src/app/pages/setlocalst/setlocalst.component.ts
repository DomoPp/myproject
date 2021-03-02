import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setlocalst',
  templateUrl: './setlocalst.component.html',
  styleUrls: ['./setlocalst.component.css']
})
export class SetlocalstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  setZero(){
    	localStorage.setItem('total1','0')
		localStorage.setItem('checks1','1')
		localStorage.setItem('total1_1','0')
		localStorage.setItem('checks1_1','3')
		localStorage.setItem('total2','0')
		localStorage.setItem('checks2','1')
		localStorage.setItem('total2_2','0')
		localStorage.setItem('checks2_2','3')
		localStorage.setItem('total3','0')
		localStorage.setItem('checks3','1')
		localStorage.setItem('total3_3','0')
		localStorage.setItem('checks3_3','3')
		localStorage.setItem('total4','0')
		localStorage.setItem('checks4','1')
		localStorage.setItem('total4_4','0')
		localStorage.setItem('checks4_4','3')
		localStorage.setItem('chapter1','3')
		localStorage.setItem('chapter2','3')
		localStorage.setItem('chapter3','3')
		localStorage.setItem('chapter4','3')
  }
  setZerochapter1(){
	localStorage.setItem('chapter1','3')
	localStorage.setItem('total1','0')
	localStorage.setItem('checks1','1')
	localStorage.setItem('total1_1','0')
	localStorage.setItem('checks1_1','3')
  }
  setZerochapter2(){
	localStorage.setItem('chapter2','3')
	localStorage.setItem('total2','0')
	localStorage.setItem('checks2','1')
	localStorage.setItem('total2_2','0')
	localStorage.setItem('checks2_2','3')
  }
  setZerochapter3(){
	localStorage.setItem('chapter3','3')
	localStorage.setItem('total3','0')
	localStorage.setItem('checks3','1')
	localStorage.setItem('total3_3','0')
	localStorage.setItem('checks3_3','3')
  }
  setZerochapter4(){
	localStorage.setItem('chapter4','3')
	localStorage.setItem('total4','0')
	localStorage.setItem('checks4','1')
	localStorage.setItem('total4_4','0')
	localStorage.setItem('checks4_4','3')
  }

}
