import { NgModule } from '@angular/core';

import { MenuItems } from './menu-items/menu-items';
import { Lesson } from './menu-items/menu-lesson';
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './accordion';


@NgModule({
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
   ],
  providers: [ 
    MenuItems,
    Lesson 
  ]
})
export class SharedModule { }
