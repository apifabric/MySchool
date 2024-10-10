import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Teacher-new',
  templateUrl: './Teacher-new.component.html',
  styleUrls: ['./Teacher-new.component.scss']
})
export class TeacherNewComponent {
  @ViewChild("TeacherForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}