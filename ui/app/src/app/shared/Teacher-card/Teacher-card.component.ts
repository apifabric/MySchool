import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Teacher-card.component.html',
  styleUrls: ['./Teacher-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Teacher-card]': 'true'
  }
})

export class TeacherCardComponent {


}