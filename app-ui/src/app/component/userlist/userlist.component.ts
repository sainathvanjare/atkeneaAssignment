import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserListComponent implements OnInit {

  userList: User[];

  constructor(private userService: UserService, private router: Router,private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this.userService.getAllUsers().subscribe((response: { data: User[], message: string }) => {
      this.userList = response.data;
      // this.userList[1].profilePic = this.domSanitizer.bypassSecurityTrustUrl(this.userList[1].profilePic);
    }, err => {
      console.log(err);
    });
  }

  onEditUser(user) {
    this.userService.setUser(user);
    this.router.navigate(['/addEditUser']);
  }

  onDeleteUser(id: string) {
    this.userService.deleteUser(id).subscribe((result) => {
      if (result) {
        this.getUserList();
      }
    }, err => {
      console.log(err);
    });
  }
}
