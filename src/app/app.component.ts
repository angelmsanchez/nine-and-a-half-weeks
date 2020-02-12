import { Component, ViewChild } from '@angular/core';

import { ViewChildComponent } from './view-child/view-child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nine-and-a-half-weeks';
  @ViewChild(ViewChildComponent) child: ViewChildComponent;

  testViewChild(): void {
    this.child.testFunctionCallerByParentComponent();
  }
}
