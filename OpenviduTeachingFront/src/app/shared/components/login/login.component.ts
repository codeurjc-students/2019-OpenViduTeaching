import { Component, ViewChild, TemplateRef, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatSnackBar, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('loginDialog', { static: false }) loginDialog: TemplateRef<any>;
  dialogRef: MatDialogRef<any, any>;

  @Output() loggedIn = new EventEmitter<any>();

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    public userService: UserService,
    private router: Router) { }

  openLoginDialog() {
    this.dialogRef = this.dialog.open(this.loginDialog, {
      width: '50%',
      height: '50%',
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  logIn(event: any, user: string, pass: string) {
    event.preventDefault();

    this.userService.logIn(user, pass).subscribe(
      (_) => {
        this.dialogRef.close();
        this.loggedIn.emit();
      },
      (error) => alert('Invalid user or password'),
    );
  }

  logOut() {
    this.userService.logOut().subscribe(
      (_) => {
        this.router.navigate(['/']);
      },
      (error) => console.log('Error when trying to log out: ' + error),
    );
  }

  eventKeyPress(event: any, user: string, pass: string) {
    if (event && event.keyCode === 13) {
      // Press Enter
      this.logIn(event, user, pass);
    }
  }
}
