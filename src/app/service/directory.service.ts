import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DirectoryService {
  BASE_URL = "http://127.0.0.1:3400/api/";

  constructor(private http: HttpClient) {}

  getDirectories() {
    return this.http.get(this.BASE_URL + "directories");
  }

  postDirectory(payload) {
    return this.http.post(this.BASE_URL + "directories", payload);
  }

  postCategory(payload) {
    return this.http.post(this.BASE_URL + "groups", payload);
  }
  getDirectory(postId) {
    return this.http.get(this.BASE_URL + "directories/" + postId);
  }

  categories() {
    return this.http.get(this.BASE_URL + "groups");
  }
}
