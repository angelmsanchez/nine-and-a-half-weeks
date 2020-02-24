import {
  Component, ViewChild, OnInit,
  AfterViewInit, Type
} from '@angular/core';

import { ViewChildComponent } from './view-child/view-child.component';
import { ViewChildStaticComponent } from './view-child-static/view-child-static.component';
import { FooComponent } from './foo/foo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(ViewChildComponent) private viewChild: ViewChildComponent;
  @ViewChild(ViewChildStaticComponent, { static: true }) private viewChildStatic: ViewChildStaticComponent;

  title = 'nine-and-a-half-weeks';
  foo: Promise<Type<FooComponent>>;

  ngOnInit(): void {
    this.viewChildStatic.testFunctionCallerByParentComponent();
  }

  ngAfterViewInit(): void {
    this.viewChild.testFunctionCallerByParentComponent();
  }

  loadFoo() {
    if (!this.foo) {
      this.foo = import(`./foo/foo.component`)
        .then(({ FooComponent }) => FooComponent);
    }
  }

  testViewChild(): void {
    this.viewChild.testFunctionCallerByParentComponent();
    this.viewChildStatic.testFunctionCallerByParentComponent();
  }

}
