import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TestsOneComponent } from './tests-one/tests-one.component';
import { PagesRoutes } from './pages.routing';
import { AtftModule } from 'atft';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';




import { Chapter1Component } from './chapter1/chapter1.component';
import { Chapter2Component } from './chapter2/chapter2.component';
import { Chapter3Component } from './chapter3/chapter3.component';
import { Chapter4Component } from './chapter4/chapter4.component';
import { TeststhreeComponent } from './teststhree/teststhree.component';
import { Pretest1Component } from './chapter1/pretest1/pretest1.component';
import { Posttest1Component } from './chapter1/posttest1/posttest1.component';
import { Pretest2Component } from './chapter2/pretest2/pretest2.component';
import { Prottest2Component } from './chapter2/prottest2/prottest2.component';
import { Pretest3Component } from './chapter3/pretest3/pretest3.component';
import { Posttest3Component } from './chapter3/posttest3/posttest3.component';
import { Pretest4Component } from './chapter4/pretest4/pretest4.component';
import { Posttest4Component } from './chapter4/posttest4/posttest4.component';
import { Direction1Component } from './chapter1/direction1/direction1.component';
import { Direction2Component } from './chapter2/direction2/direction2.component';
import { Direction3Component } from './chapter3/direction3/direction3.component';
import { Direction4Component } from './chapter4/direction4/direction4.component';
import { Workshop1Component } from './workshop/workshop1/workshop1.component';
import { Workshop2Component } from './workshop/workshop2/workshop2.component';
import { Workshop3Component } from './workshop/workshop3/workshop3.component';
import { Workshop4Component } from './workshop/workshop4/workshop4.component';
import { Workshop5Component } from './workshop/workshop5/workshop5.component';
import { Workshop6Component } from './workshop/workshop6/workshop6.component';
import { Workshop7Component } from './workshop/workshop7/workshop7.component';
import { Workshop8Component } from './workshop/workshop8/workshop8.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    TestsOneComponent,
    Chapter2Component,
    Chapter1Component,
    Chapter3Component,
    Chapter4Component,
    TeststhreeComponent,
    Pretest1Component,
    Posttest1Component,
    Pretest2Component,
    Prottest2Component,
    Pretest3Component,
    Posttest3Component,
    Pretest4Component,
    Posttest4Component,
    Direction1Component,
    Direction2Component,
    Direction3Component,
    Direction4Component,
    Workshop1Component,
    Workshop2Component,
    Workshop3Component,
    Workshop4Component,
    Workshop5Component,
    Workshop6Component,
    Workshop7Component,
    Workshop8Component,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    MatCardModule,
    AtftModule,
    MatChipsModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
    
  ]
})
export class PagesModule { }
