import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DirectoryService } from "src/app/service/directory.service";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Observable } from "rxjs";
import { AddGroupComponent } from "../add-group/add-group.component";

export interface DialogData {
  name: string;
}
@Component({
  selector: "app-edit-directory",
  templateUrl: "./edit-directory.component.html",
  styleUrls: ["./edit-directory.component.scss"]
})
export class EditDirectoryComponent implements OnInit {
  data = {};
  id = String;

  constructor(
    private edit: DirectoryService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.route.params.subscribe(params => {
      this.data = params.id;
    });
  }

  ngOnInit() {
    this.edit.getDirectory(this.data).subscribe(res => {
      this.data = res;
      this.id = res["data"].id;
      console.log(res);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddGroupComponent, {
      width: "600px",
      data: { name: this.id }
    });
    dialogRef.afterClosed();
  }
}
