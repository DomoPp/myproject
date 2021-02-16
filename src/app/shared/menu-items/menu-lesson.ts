import { Injectable } from '@angular/core';

export interface Lessons {
  state: string;
  name: string;
  type: string;
  icon: string;

  prestate: string;
  prename: string;
  pretype: string;
  preicon: string;

  posstate: string;
  posname: string;
  postype: string;
  posicon: string;

  directionstate: string;
  directionname: string;
  directiontype: string;
  directionicon: string;



  badge:string;
}

const LESSON = [
  { state: 'Chapter1', type: 'link', name: 'Chapter 1', icon: 'import_contacts', 
    prestate: 'Pretest1',  pretype: 'link', prename: 'Pretest',preicon: 'assignment',  
    posstate: 'Posttest1', postype: 'link', posname: 'Posttest', posicon: 'assignment',
    directionstate: 'direction1',directionname: 'direction',directiontype: 'link',directionicon: 'article',
    badge:'' 
  },
  { state: 'Chapter2', type: 'link', name: 'Chapter 2', icon: 'import_contacts', 
    prestate: 'Pretest2',  pretype: 'link', prename: 'Pretest',preicon: 'assignment',  
    posstate: 'Posttest2', postype: 'link', posname: 'Posttest', posicon: 'assignment',
    directionstate: 'direction2',directionname: 'direction',directiontype: 'link',directionicon: 'article',
    badge:'' 
  },
  { state: 'Chapter3', type: 'link', name: 'Chapter 3', icon: 'import_contacts', 
    prestate: 'Pretest3',  pretype: 'link', prename: 'Pretest',preicon: 'assignment',  
    posstate: 'Posttest3', postype: 'link', posname: 'Posttest', posicon: 'assignment',
    directionstate: 'direction3',directionname: 'direction',directiontype: 'link',directionicon: 'article',
    badge:''  
  },
  { state: 'Chapter4', type: 'link', name: 'Chapter 4', icon: 'import_contacts', 
    prestate: 'Pretest4',  pretype: 'link', prename: 'Pretest',preicon: 'assignment',  
    posstate: 'Posttest4', postype: 'link', posname: 'Posttest', posicon: 'assignment',
    directionstate: 'direction4',directionname: 'direction',directiontype: 'link',directionicon: 'article',
    badge:''  
  },
  // { state: 'Chapter2', type: 'link', name: 'Chapter2', icon: 'import_contacts' },
  // { state: 'Chapter3', type: 'link', name: 'Chapter3', icon: 'import_contacts' },
  // { state: 'Chapter4', type: 'link', name: 'Chapter4', icon: 'import_contacts' },
  // { state: 'Pretest1', type: 'link', name: 'Pretest1', icon: 'import_contacts' },
  // { state: 'Posttest1', type: 'link', name: 'Posttest1', icon: 'import_contacts'},

];

@Injectable()
export class Lesson {
  getLesson(): Lessons[] {
    return LESSON;
  }
}
