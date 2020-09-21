import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Repository } from "src/app/models/repository";
import { UserService } from "src/app/services/user/user.service";

@Component({
  selector: "app-respositories-view",
  templateUrl: "./respositories-view.component.html",
  styleUrls: ["./respositories-view.component.css"],
})
export class RespositoriesViewComponent implements OnInit {
  username: string = "";
  actualPage: number = 1;
  pages: number = 0;
  repositories = [];
  pagination: number[] = [];
  repo_url: string = "";
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.paramMap.get("login");
    this.userService.getUser(this.username).subscribe((data) => {
      this.pages = Math.round(data["public_repos"] / 4);
      this.repo_url = data["repos_url"];
      this.userService.getRepositories(this.repo_url, 1).subscribe((repos) => {
        this.repositories.push(repos);
        1;
      });
    });
    for (var i = 1; i <= this.pages; i++) {
      this.pagination.push(i);
    }
  }

  getPage(page: number) {
    this.userService.getRepositories(this.repo_url, page).subscribe((repos) => {
      this.repositories.pop();
      this.repositories.push(repos);
    });
  }
}
