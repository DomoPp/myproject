import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;

  badge:string;
}

const WORKSHOP = [
  { state: 'three', type: 'link', name: 'three', icon: '3d_rotation', badge:''  },
  { state: 'Workshop1', name: 'Workshop1', type: 'link', icon: 'book', badge:'' },
  { state: 'Workshop2', name: 'Workshop2', type: 'link', icon: 'book', badge:'' },
  { state: 'Workshop3', name: 'Workshop3', type: 'link', icon: 'book', badge:'' },
  { state: 'Workshop4', name: 'Workshop4', type: 'link', icon: 'book', badge:'' },
  { state: 'Workshop5', name: 'Workshop5', type: 'link', icon: 'book', badge:'' },
  { state: 'Workshop6', name: 'Workshop6', type: 'link', icon: 'book', badge:'' },
  { state: 'Workshop7', name: 'Workshop7', type: 'link', icon: 'book', badge:'' },
  { state: 'Workshop8', name: 'Workshop8', type: 'link', icon: 'book', badge:'' },
];

@Injectable()
export class WorkShop {
  getWorkShop(): Menu[] {
    return WORKSHOP;
  }
}
