import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Course', loadChildren: () => import('./Course/Course.module').then(m => m.CourseModule) },
    
        { path: 'Enrollment', loadChildren: () => import('./Enrollment/Enrollment.module').then(m => m.EnrollmentModule) },
    
        { path: 'Grade', loadChildren: () => import('./Grade/Grade.module').then(m => m.GradeModule) },
    
        { path: 'School', loadChildren: () => import('./School/School.module').then(m => m.SchoolModule) },
    
        { path: 'Student', loadChildren: () => import('./Student/Student.module').then(m => m.StudentModule) },
    
        { path: 'Teacher', loadChildren: () => import('./Teacher/Teacher.module').then(m => m.TeacherModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }