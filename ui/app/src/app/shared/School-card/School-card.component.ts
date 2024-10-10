import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './School-card.component.html',
  styleUrls: ['./School-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.School-card]': 'true'
  }
})

export class SchoolCardComponent {


}