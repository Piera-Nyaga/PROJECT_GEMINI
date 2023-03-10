import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-myquestions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './myquestions.component.html',
  styleUrls: ['./myquestions.component.css']
})
export class MyquestionsComponent {

  shqQuiz=false;

  shAnsw = false;

  ShowQuestion(){
    this.shqQuiz=!this.shqQuiz
  }

  showAnsw(){
    this.shAnsw=!this.shAnsw
  }
}
