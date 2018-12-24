import { Component, OnInit, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { DirectoryService } from "src/app/service/directory.service";
import { HttpClient } from "@angular/common/http";

export interface DialogData {
  name: string;
}
@Component({
  selector: "app-add-group",
  templateUrl: "./add-group.component.html",
  styleUrls: ["./add-group.component.scss"]
})
export class AddGroupComponent implements OnInit {
  BASE_URL = "http://127.0.0.1:3400/api/";
  data = {
    category: ""
  };
  id = this.info.name;
  category = {};
  constructor(
    public dialogRef: MatDialogRef<AddGroupComponent>,
    private post: DirectoryService,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public info: DialogData
  ) {}

  ngOnInit() {
    this.post.categories().subscribe(res => {
      this.category = res["data"];
      console.log(res["data"]);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addCategory() {
    this.addcategories(this.data).subscribe(res => {
      console.log(res);
    });
    console.log(this.data);
    this.dialogRef.close();
  }

  addcategories(payload) {
    return this.http.post(
      this.BASE_URL + "directories/" + this.id + "/categories",
      payload
    );
  }
}
