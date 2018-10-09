import { Routes } from '@angular/router'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component'; 
import { UserProfileRouteComponent } from './user-profile-route/user-profile-route.component';
import { SettingsComponent } from './settings/settings.component';
import { ChangePasswordRouteComponent } from './change-password-route/change-password-route.component';

export const appRoutes: Routes = [
    {path: '', component: DashboardComponent },
    {path: 'users', component: UsersComponent },
    {path: 'settings', component: SettingsComponent }, 
    {path: 'settings/change password', component: ChangePasswordRouteComponent }, 
    {path: ':worker_id', component: UserProfileRouteComponent}
]; 