import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from '../Interfaces/question';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { QuestionService } from '../Services/QuestionsService/questionservice';

@Component({
  selector: 'app-onequestion',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './onequestion.component.html',
  styleUrls: ['./onequestion.component.css']
})
export class OnequestionComponent implements OnInit{
//  @Input() one?:Question
 x!:Question;

 constructor(private route:ActivatedRoute, private questionService:QuestionService){

 }


  shqQuiz=false;

  shAnsw = false;

  ShowQuestion(){
    this.shqQuiz=!this.shqQuiz
  }

  showAnsw(){
    this.shAnsw=!this.shAnsw
  }

  ngOnInit(): void {
    const qnId =Number(this.route.snapshot.params["id"])
    this.x=this.questionService.getOneQuiz(qnId)
    console.log(qnId);
    
  }


}
