import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Grade-new',
  templateUrl: './Grade-new.component.html',
  styleUrls: ['./Grade-new.component.scss']
})
export class GradeNewComponent {
  @ViewChild("GradeForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}