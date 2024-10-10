import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradeHomeComponent } from './home/Grade-home.component';
import { GradeNewComponent } from './new/Grade-new.component';
import { GradeDetailComponent } from './detail/Grade-detail.component';

const routes: Routes = [
  {path: '', component: GradeHomeComponent},
  { path: 'new', component: GradeNewComponent },
  { path: ':id', component: GradeDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Grade-detail-permissions'
      }
    }
  }
];

export const GRADE_MODULE_DECLARATIONS = [
    GradeHomeComponent,
    GradeNewComponent,
    GradeDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GradeRoutingModule { }