import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child-static',
  templateUrl: './view-child-static.component.html',
  styleUrls: ['./view-child-static.component.scss']
})
export class ViewChildStaticComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  testFunctionCallerByParentComponent(): void {
    console.log('Test ViewChildStaticComponent');
  }

}
