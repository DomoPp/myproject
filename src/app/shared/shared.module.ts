import { NgModule } from '@angular/core';

import { MenuItems } from './menu-items/menu-items';
import { Lesson } from './menu-items/menu-lesson';
import { WorkShop } from './menu-items/menu-workshop';
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
    Lesson,
    WorkShop

  ]
})
export class SharedModule { }
