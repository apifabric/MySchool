import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolHomeComponent } from './home/School-home.component';
import { SchoolNewComponent } from './new/School-new.component';
import { SchoolDetailComponent } from './detail/School-detail.component';

const routes: Routes = [
  {path: '', component: SchoolHomeComponent},
  { path: 'new', component: SchoolNewComponent },
  { path: ':id', component: SchoolDetailComponent,
    data: {
      oPermission: {
        permissionId: 'School-detail-permissions'
      }
    }
  },{
    path: ':school_id/Course', loadChildren: () => import('../Course/Course.module').then(m => m.CourseModule),
    data: {
        oPermission: {
            permissionId: 'Course-detail-permissions'
        }
    }
},{
    path: ':school_id/Student', loadChildren: () => import('../Student/Student.module').then(m => m.StudentModule),
    data: {
        oPermission: {
            permissionId: 'Student-detail-permissions'
        }
    }
},{
    path: ':school_id/Teacher', loadChildren: () => import('../Teacher/Teacher.module').then(m => m.TeacherModule),
    data: {
        oPermission: {
            permissionId: 'Teacher-detail-permissions'
        }
    }
}
];

export const SCHOOL_MODULE_DECLARATIONS = [
    SchoolHomeComponent,
    SchoolNewComponent,
    SchoolDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule { }