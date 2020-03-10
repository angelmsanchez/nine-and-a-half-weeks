import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import {
  TestComponent, ViewChildComponent, ViewChildStaticComponent,
  FooComponent
} from './components';


@NgModule({
  declarations: [
    TestComponent,
    ViewChildComponent,
    ViewChildStaticComponent,
    FooComponent,
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
  ]
})
export class TestModule { }
