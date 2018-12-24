import { Component, OnInit } from "@angular/core";
import { DirectoryService } from "src/app/service/directory.service";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { AddCategoryComponent } from "../add-category/add-category.component";

@Component({
  selector: "app-admin-home",
  templateUrl: "./admin-home.component.html",
  styleUrls: ["./admin-home.component.scss"]
})
export class AdminHomeComponent implements OnInit {
  info = {};

  constructor(private dir: DirectoryService, public dialog: MatDialog) {}

  ngOnInit() {
    this.dir.getDirectories().subscribe(res => {
      console.log(res);
      this.info = res;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddCategoryComponent);
    dialogRef.afterClosed();
  }
}
