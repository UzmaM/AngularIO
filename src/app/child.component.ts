import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Student} from './student';

@Component({
    selector: 'child',
    templateUrl: './child.component.html',
    // styleUrls: ['./child.component.css']
  })

  export class childComponent {

    addNumMsg ='Add Number'
    num1 : '';
    num2 : '';
    childtitle = 'child component';

    @Input() 
    studentMsg : string;
    
    @Output('addStudentEvent') 
    addStdEvent = new EventEmitter<Student>();

    @Output('addNumberEvent') 
    addNumEvent = new EventEmitter<number>();
    
    student = new Student();
    addStudent() {
        this.addStdEvent.emit(this.student);
      }
    addNumber() {
        this.addNumEvent.emit(parseInt(this.num1) + parseInt(this.num2));
      }

  }