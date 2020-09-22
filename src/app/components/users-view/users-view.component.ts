import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from "@angular/forms";
import { User } from "src/app/models/user";
import { UserService } from "src/app/services/user/user.service";

@Component({
  selector: "app-users-view",
  templateUrl: "./users-view.component.html",
  styleUrls: ["./users-view.component.css"],
})
export class UsersViewComponent implements OnInit {
  searchForm = new FormGroup({
    userInput: new FormControl("", Validators.required),
  });
  users = [];
  username: string = "";
  actualPage: number = 1;
  pages: number = 0;
  totalUsers: number = 0;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.actualPage = 1;
    this.username = this.user.value;
    this.user.setValue("");
    this.users = [];
    this.userService
      .getUsers(this.username, this.actualPage)
      .subscribe((data) => {
        this.totalUsers = data.total_count;
        this.pages = Math.round(data.total_count / 4);
        this.users.push(data.items as User[]);
      });
  }

  loadUsers() {
    this.userService
      .getUsers(this.username, this.actualPage + 1)
      .subscribe((data) => {
        this.actualPage++;
        this.users.push(data.items as User[]);
      });
  }

  get user(): AbstractControl {
    return this.searchForm.get("userInput");
  }
}
