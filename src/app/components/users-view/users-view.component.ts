import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from "@angular/forms";

@Component({
  selector: "app-users-view",
  templateUrl: "./users-view.component.html",
  styleUrls: ["./users-view.component.css"],
})
export class UsersViewComponent implements OnInit {
  searchForm = new FormGroup({
    userInput: new FormControl("", Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.user.value);
  }
  get user(): AbstractControl {
    return this.searchForm.get("userInput");
  }
}
