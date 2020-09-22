import { Component, Input, OnInit } from "@angular/core";
import { User } from "src/app/models/user";

@Component({
  selector: "app-user-detail-card",
  templateUrl: "./user-detail-card.component.html",
  styleUrls: ["./user-detail-card.component.css"],
})
export class UserDetailCardComponent implements OnInit {
  @Input() user: User;
  constructor() {}

  ngOnInit(): void {}

  openTab() {
    window.open(this.user.html_url, "_blank");
  }
}
