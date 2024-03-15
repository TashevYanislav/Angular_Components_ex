import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [UserListComponent],
  imports: [CommonModule, SharedModule, CoreModule],
  exports: [UserListComponent],
})
export class UserModule {}
