import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { ToDoListComponent } from './to-do/to-do-list/to-do-list.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  { path: '', component: ToDoListComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'todo-list', component: ToDoListComponent },
  { path: 'error-page', component: ErrorPageComponent },
  { path: '**', redirectTo: 'error-page' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
