import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SCHOOL_MODULE_DECLARATIONS, SchoolRoutingModule} from  './School-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    SchoolRoutingModule
  ],
  declarations: SCHOOL_MODULE_DECLARATIONS,
  exports: SCHOOL_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SchoolModule { }