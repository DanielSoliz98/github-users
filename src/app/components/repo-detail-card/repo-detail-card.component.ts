import { Component, Input, OnInit } from "@angular/core";
import { Repository } from "src/app/models/repository";
import { UserService } from "src/app/services/user/user.service";

@Component({
  selector: "app-repo-detail-card",
  templateUrl: "./repo-detail-card.component.html",
  styleUrls: ["./repo-detail-card.component.css"],
})
export class RepoDetailCardComponent implements OnInit {
  @Input() repository: Repository;
  issues_count: number = 0;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getIssues(this.repository.issues_url).subscribe((data) => {
      this.issues_count = data.length;
    });
  }

  openTab(): void {
    window.open(this.repository.html_url, "_blank");
  }
}
