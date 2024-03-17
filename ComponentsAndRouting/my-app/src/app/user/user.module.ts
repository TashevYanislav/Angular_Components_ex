import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AuthGuard } from './user-detail/user-details.guard';

@NgModule({
  declarations: [UserListComponent, UserDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    RouterModule.forChild([
      {
        path: 'user-list/details/:id',
        component: UserDetailComponent,
        canActivate: [AuthGuard],
      },
    ]),
  ],
  exports: [UserListComponent, UserDetailComponent],
})
export class UserModule {}
