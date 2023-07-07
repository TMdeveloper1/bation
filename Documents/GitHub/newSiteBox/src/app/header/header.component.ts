import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'; // Import UserService here
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: any = null; // Change the type to any

  constructor(private afAuth: AngularFireAuth, private userService: UserService) {} // Inject UserService here

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((user: any) => {
      this.user = user;
    });
  }
  

  logout(): void {
    this.afAuth.signOut();
    this.userService.setCurrentUser(null); // Reset the current user in UserService
  }
}
