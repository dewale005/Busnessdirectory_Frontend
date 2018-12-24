import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { DirectoryService } from "src/app/service/directory.service";

@Component({
  selector: "app-add-category",
  templateUrl: "./add-category.component.html",
  styleUrls: ["./add-category.component.scss"]
})
export class AddCategoryComponent implements OnInit {
  data = {
    category: ""
  };
  constructor(
    public dialogRef: MatDialogRef<AddCategoryComponent>,
    private post: DirectoryService
  ) {}

  ngOnInit() {}
  onNoClick(): void {
    this.dialogRef.close();
  }

  addCategory() {
    this.post.postCategory(this.data).subscribe(res => {
      console.log(res);
    });
    console.log(this.data);
    this.dialogRef.close();
  }
}
