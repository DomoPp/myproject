import { Routes } from '@angular/router';
import { TestsOneComponent } from './tests-one/tests-one.component'
import { Chapter1Component } from './chapter1/chapter1.component'
import { Pretest1Component } from './chapter1/pretest1/pretest1.component'
import { Posttest1Component } from './chapter1/posttest1/posttest1.component'
import { Chapter2Component } from './chapter2/chapter2.component'
import { Pretest2Component } from './chapter2/pretest2/pretest2.component'
import { Prottest2Component } from './chapter2/prottest2/prottest2.component'
import { Chapter3Component } from './chapter3/chapter3.component'
import { Pretest3Component } from './chapter3/pretest3/pretest3.component'
import { Posttest3Component } from './chapter3/posttest3/posttest3.component'
import { Chapter4Component } from './chapter4/chapter4.component'
import { Pretest4Component } from './chapter4/pretest4/pretest4.component'
import { Posttest4Component } from './chapter4/posttest4/posttest4.component'
import { TeststhreeComponent } from './teststhree/teststhree.component'
import { Direction1Component } from './chapter1/direction1/direction1.component'
import { Direction2Component } from './chapter2/direction2/direction2.component'
import { Direction3Component } from './chapter3/direction3/direction3.component'
import { Direction4Component } from './chapter4/direction4/direction4.component'
import { AboutComponent } from './about/about.component'
import { Workshop1Component } from './workshop/workshop1/workshop1.component'
import { Workshop2Component } from './workshop/workshop2/workshop2.component'
import { Workshop3Component } from './workshop/workshop3/workshop3.component'
import { Workshop4Component } from './workshop/workshop4/workshop4.component'
import { Workshop5Component } from './workshop/workshop5/workshop5.component'
import { Workshop6Component } from './workshop/workshop6/workshop6.component'
import { Workshop7Component } from './workshop/workshop7/workshop7.component'
import { Workshop8Component } from './workshop/workshop8/workshop8.component'
import { SetlocalstComponent } from './setlocalst/setlocalst.component'
import { RateComponent } from './rate/rate.component'

export const PagesRoutes: Routes = [
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'testsone',
      component: TestsOneComponent
    },
    {
      path: 'Chapter1',
      component: Chapter1Component
    },
    {
      path: 'Pretest1',
      component: Pretest1Component
    },
    {
      path: 'Posttest1',
      component: Posttest1Component
    },

    {
      path: 'Chapter2',
      component: Chapter2Component
    },
    {
      path: 'Pretest2',
      component: Pretest2Component
    },
    {
      path: 'Posttest2',
      component: Prottest2Component
    },

    {
      path: 'Chapter3',
      component: Chapter3Component
    },
    {
      path: 'Pretest3',
      component: Pretest3Component
    },
    {
      path: 'Posttest3',
      component: Posttest3Component
    },

    {
      path: 'Chapter4',
      component: Chapter4Component
    },
    {
      path: 'Pretest4',
      component: Pretest4Component
    },
    {
      path: 'Posttest4',
      component: Posttest4Component
    },
    {
      path: 'direction1',
      component: Direction1Component
    },
    {
      path: 'direction2',
      component: Direction2Component
    },
    {
      path: 'direction3',
      component: Direction3Component
    },
    {
      path: 'direction4',
      component: Direction4Component
    },

    {
      path: 'Workshop1',
      component: Workshop1Component
    },
    {
      path: 'Workshop2',
      component: Workshop2Component
    },
    {
      path: 'Workshop3',
      component: Workshop3Component
    },
    {
      path: 'Workshop4',
      component: Workshop4Component
    },
    {
      path: 'Workshop5',
      component: Workshop5Component
    },
    {
      path: 'Workshop6',
      component: Workshop6Component
    },
    {
      path: 'Workshop7',
      component: Workshop7Component
    },
    {
      path: 'Workshop8',
      component: Workshop8Component
    },

    {
      path: 'three',
      component: TeststhreeComponent
    },
    {
      path: 'setlocalst',
      component: SetlocalstComponent
    },
    {
      path: 'rate',
      component: RateComponent
    },
]