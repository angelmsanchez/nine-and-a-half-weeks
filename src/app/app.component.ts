import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';

import { ViewChildComponent } from './view-child/view-child.component';
import { ViewChildStaticComponent } from './view-child-static/view-child-static.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'nine-and-a-half-weeks';

  @ViewChild(ViewChildComponent) private viewChild: ViewChildComponent;
  @ViewChild(ViewChildStaticComponent, { static: true }) private viewChildStatic: ViewChildStaticComponent;

  ngOnInit(): void {
    this.viewChildStatic.testFunctionCallerByParentComponent();
  }

  ngAfterViewInit(): void {
    this.viewChild.testFunctionCallerByParentComponent();
  }

  testViewChild(): void {
    this.viewChild.testFunctionCallerByParentComponent();
    this.viewChildStatic.testFunctionCallerByParentComponent();
  }
}
