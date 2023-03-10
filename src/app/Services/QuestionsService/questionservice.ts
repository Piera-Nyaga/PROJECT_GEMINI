import { Injectable } from '@angular/core';
import { Question } from '../../Interfaces/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private question: Question[] = [
    {
        title:"Error print user.default swift 3",
        description:"I have three screens the first of login and the second shows the user information. On the login screen keep the user_id value in user.defaults and when I go to the second screen I use that value to",
        code:"I have two screens the first of login and the second shows the user information. On the login screen keep the user_id value in user.defaults and when I go to the second screen I use that value to ...",
        createdAt: new Date().toLocaleDateString()
    }
  ]

  constructor() { }


  addQuiz(question: Question): void {
    this.question.push(question);
    console.log(this.question);
  }

  getQuiz() {
    return this.question;
  }
  getOneQuiz(id:number):Question{
    return this.question.find(x=>x.id===id) as Question
  }


}