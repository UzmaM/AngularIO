import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent component';
  stdFullName = '';
	sum = '';
	msg = '';
  
  stdMsg = 'Student message @input';
  
	saveData(std) {
	    this.stdFullName = std.fname + ' ' + std.lname ;
        }		
	printSum(res) {
	    this.sum = res;
        }			
	printMsg(msg) {
	    this.msg = msg;
        }			
}
