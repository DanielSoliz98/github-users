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
  page: number = 1;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.user.value);
    this.username = this.user.value;
    this.userService.getUsers(this.user.value, this.page).subscribe((data) => {
      this.users.push(data.items as User[]);
      this.user.setValue("");
      console.log(data.items as User[]);
    });
  }

  get user(): AbstractControl {
    return this.searchForm.get("userInput");
  }
}
