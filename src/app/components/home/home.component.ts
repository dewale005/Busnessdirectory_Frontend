import { Component, OnInit } from "@angular/core";
import { DirectoryService } from "src/app/service/directory.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  info = {};

  constructor(private dir: DirectoryService) {}

  ngOnInit() {
    this.dir.getDirectories().subscribe(res => {
      console.log(res);
      this.info = res;
    });
  }
}
