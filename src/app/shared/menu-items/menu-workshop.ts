import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;

  badge:string;
}

const WORKSHOP = [
  { state: 'Workshop1', name: 'Workshop1', type: 'link', icon: 'av_timer', badge:'' },
  { state: 'Workshop2', name: 'Workshop2', type: 'link', icon: 'av_timer', badge:'' },
  { state: 'Workshop3', name: 'Workshop3', type: 'link', icon: 'av_timer', badge:'' },
  { state: 'Workshop4', name: 'Workshop4', type: 'link', icon: 'av_timer', badge:'' },
  { state: 'Workshop5', name: 'Workshop5', type: 'link', icon: 'av_timer', badge:'' },
  { state: 'Workshop6', name: 'Workshop6', type: 'link', icon: 'av_timer', badge:'' },
  { state: 'Workshop7', name: 'Workshop7', type: 'link', icon: 'av_timer', badge:'' },
  { state: 'Workshop8', name: 'Workshop8', type: 'link', icon: 'av_timer', badge:'' },
];

@Injectable()
export class WorkShop {
  getWorkShop(): Menu[] {
    return WORKSHOP;
  }
}
