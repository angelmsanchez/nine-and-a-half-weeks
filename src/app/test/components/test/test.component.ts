import {
  Component, ViewChild, OnInit,
  AfterViewInit, Type
} from '@angular/core';

import { ViewChildComponent } from './../../components/view-child/view-child.component';
import { ViewChildStaticComponent } from './../../components/view-child-static/view-child-static.component';
import { FooComponent } from './../../components/foo/foo.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, AfterViewInit {
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
      this.foo = import(/* webpackChunkName: 'test-angel', webpackPrefetch: true */`./../foo/foo.component`)
        .then(({ FooComponent }) => FooComponent);
    }
  }

  testViewChild(): void {
    this.viewChild.testFunctionCallerByParentComponent();
    this.viewChildStatic.testFunctionCallerByParentComponent();
  }

}
