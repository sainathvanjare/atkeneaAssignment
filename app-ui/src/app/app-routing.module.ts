import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditUserComponent } from './component/add-edit-user/add-edit-user.component';
import { UserListComponent } from './component/userlist/userlist.component';


const routes: Routes = [{
  path: '',
  component: UserListComponent
}, {
  path: 'addEditUser',
  component: AddEditUserComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }