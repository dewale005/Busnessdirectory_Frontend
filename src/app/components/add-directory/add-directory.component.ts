import { Component, OnInit } from "@angular/core";
import { DirectoryService } from "src/app/service/directory.service";

@Component({
  selector: "app-add-directory",
  templateUrl: "./add-directory.component.html",
  styleUrls: ["./add-directory.component.scss"]
})
export class AddDirectoryComponent implements OnInit {
  data = {
    name: "",
    description: "",
    website: "",
    email: "",
    phone_no: "",
    address: "",
    filename: ""
  };
  constructor(private post: DirectoryService) {}

  ngOnInit() {}

  onSubmit() {
    this.post.postDirectory(this.data).subscribe(res => {
      console.log(res);
    });
    console.log(this.data);
  }
}
