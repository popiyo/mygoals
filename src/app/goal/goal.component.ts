import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals: Goal[] = [
    new Goal (1,'Watching a movie','Watching', new Date(2028,3,14)),
    new Goal (2,'Create a playlist','playing', new Date(2020,8,14)),
    new Goal (3,'Create a Zoo', 'keeping', new Date(2020,3,2)),
    new Goal (4,'Showcase progress', 'showing', new Date(2020,3,14)),
    new Goal (5,'Display Model, View and Controller', 'programming', new Date(2021,3,14)),
    new Goal (6,'Unit test the delivery', 'Quality Assurance', new Date(2023,3,14))
  ]

  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  deleteGoal(isComplete,index){
    if(isComplete)
      this.goals.splice(index,1);
      let isAgree = confirm(`Are you sure you want to delete ${this.goals[index].name}`);

    if(isAgree)
        this.goals.splice(index,1);
}

  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date (goal.completeDate);
    this.goals.push(goal);
  }


  constructor() {}

  ngOnInit(): void {}

}
