import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentHomeComponent } from './home/Student-home.component';
import { StudentNewComponent } from './new/Student-new.component';
import { StudentDetailComponent } from './detail/Student-detail.component';

const routes: Routes = [
  {path: '', component: StudentHomeComponent},
  { path: 'new', component: StudentNewComponent },
  { path: ':id', component: StudentDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Student-detail-permissions'
      }
    }
  },{
    path: ':student_id/Enrollment', loadChildren: () => import('../Enrollment/Enrollment.module').then(m => m.EnrollmentModule),
    data: {
        oPermission: {
            permissionId: 'Enrollment-detail-permissions'
        }
    }
}
];

export const STUDENT_MODULE_DECLARATIONS = [
    StudentHomeComponent,
    StudentNewComponent,
    StudentDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }