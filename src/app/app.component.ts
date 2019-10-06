import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
	answer = false;
	changeProgress = undefined;		
	question = 1; 

	onAnswer(a){
		this.answer = a;
	}
	onSubmit(){
		if(this.answer === true)this.changeProgress=true;
		else if(this.answer === false)this.changeProgress=false;
		else if(this.answer === undefined)this.changeProgress=undefined;
	}
	nextQuestion(){
		if(this.question < 3)
			this.question+=1;
	}
	changeQuestion(numberQuestion){
		this.question = numberQuestion;
	}
}
