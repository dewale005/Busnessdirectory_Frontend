import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AdminHomeComponent } from "./components/dashboard/admin-home/admin-home.component";
import { AddDirectoryComponent } from "./components/add-directory/add-directory.component";
import { EditDirectoryComponent } from "./components/dashboard/edit-directory/edit-directory.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "home",
    component: AdminHomeComponent
  },
  {
    path: "Add",
    component: AddDirectoryComponent
  },
  {
    path: "edit/:id",
    component: EditDirectoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
