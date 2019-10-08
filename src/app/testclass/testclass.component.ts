import { Component} from '@angular/core';

@Component({
  selector: 'app-testclass',
  templateUrl: './testclass.component.html',
})
export class TestclassComponent {

  myString: string = '';
  myNumber: number = 1;
  myBoolean: boolean = true;
  myArray?: any[] = [];

  constructor() { }

}

