import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material";
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { AdminHomeComponent } from "./components/dashboard/admin-home/admin-home.component";
import { AddDirectoryComponent } from "./components/add-directory/add-directory.component";
import { FormsModule } from "@angular/forms";
import { AddCategoryComponent } from "./components/dashboard/add-category/add-category.component";
import { EditDirectoryComponent } from "./components/dashboard/edit-directory/edit-directory.component";
import { AddGroupComponent } from "./components/dashboard/add-group/add-group.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AdminHomeComponent,
    AddDirectoryComponent,
    AddCategoryComponent,
    EditDirectoryComponent,
    AddGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [AddCategoryComponent, AddGroupComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
