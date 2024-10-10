import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Grade-card.component.html',
  styleUrls: ['./Grade-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Grade-card]': 'true'
  }
})

export class GradeCardComponent {


}