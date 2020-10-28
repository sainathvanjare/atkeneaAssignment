import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './component/userlist/userlist.component';
import { AddEditUserComponent } from './component/add-edit-user/add-edit-user.component';
import { UserService } from './service/user.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './component/header/header.component'


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AddEditUserComponent,
    HeaderComponent    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
