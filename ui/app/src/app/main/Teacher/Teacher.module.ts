import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {TEACHER_MODULE_DECLARATIONS, TeacherRoutingModule} from  './Teacher-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    TeacherRoutingModule
  ],
  declarations: TEACHER_MODULE_DECLARATIONS,
  exports: TEACHER_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TeacherModule { }