import { MenuRootItem } from 'ontimize-web-ngx';

import { CourseCardComponent } from './Course-card/Course-card.component';

import { EnrollmentCardComponent } from './Enrollment-card/Enrollment-card.component';

import { GradeCardComponent } from './Grade-card/Grade-card.component';

import { SchoolCardComponent } from './School-card/School-card.component';

import { StudentCardComponent } from './Student-card/Student-card.component';

import { TeacherCardComponent } from './Teacher-card/Teacher-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Course', name: 'COURSE', icon: 'view_list', route: '/main/Course' }
    
        ,{ id: 'Enrollment', name: 'ENROLLMENT', icon: 'view_list', route: '/main/Enrollment' }
    
        ,{ id: 'Grade', name: 'GRADE', icon: 'view_list', route: '/main/Grade' }
    
        ,{ id: 'School', name: 'SCHOOL', icon: 'view_list', route: '/main/School' }
    
        ,{ id: 'Student', name: 'STUDENT', icon: 'view_list', route: '/main/Student' }
    
        ,{ id: 'Teacher', name: 'TEACHER', icon: 'view_list', route: '/main/Teacher' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    CourseCardComponent

    ,EnrollmentCardComponent

    ,GradeCardComponent

    ,SchoolCardComponent

    ,StudentCardComponent

    ,TeacherCardComponent

];