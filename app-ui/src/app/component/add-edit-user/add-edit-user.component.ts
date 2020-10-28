import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  public user: User;
  errMessage = '';
  base64textString:String="";
  
  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

  submitForm() {
    this.errMessage = '';
    this.user.profilePic = this.base64textString;
    if (this.hasNumber(this.user.phoneNo)) {
      if (!this.user._id) {
        this.userService.createUser(this.user).subscribe((result: { data: User, message: string }) => {
          this.router.navigate(['/']);
        }, err => {
          console.log(err);
          this.errMessage = err.error.message;
        });
      } else {
        this.userService.updateUser(this.user).subscribe((result: { data: User, message: string }) => {
          this.router.navigate(['/']);
        }, err => {
          this.errMessage = err.error.message;
        });
      }
    } else {
      this.errMessage = 'Please check Phone number';
    }
  }

  hasNumber(num) {
    return /^\d+$/.test(num);
  }


  handleFileSelect(evt){
      var files = evt.target.files;
      var file = files[0];
    
    if (files && file) {
        var reader = new FileReader();

        reader.onload =this._handleReaderLoaded.bind(this);

        reader.readAsBinaryString(file);
    }
  }
  
  _handleReaderLoaded(readerEvt) {
     var binaryString = readerEvt.target.result;
            this.base64textString= btoa(binaryString);
            console.log(btoa(binaryString));
    }
}
