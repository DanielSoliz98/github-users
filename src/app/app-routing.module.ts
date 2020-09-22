import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RespositoriesViewComponent } from "./components/respositories-view/respositories-view.component";
import { UsersViewComponent } from "./components/users-view/users-view.component";

const routes: Routes = [
  { path: "", redirectTo: "/users", pathMatch: "full" },
  { path: "users", component: UsersViewComponent },
  { path: "repositories/:login", component: RespositoriesViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
