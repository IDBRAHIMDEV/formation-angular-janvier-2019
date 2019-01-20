import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  _getPosts() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }

  createPost(data) {
    return this.http.post("https://jsonplaceholder.typicode.com/posts", data);
  }

  putPost(data) {
    return this.http.put(`https://jsonplaceholder.typicode.com/posts/${data.id}`, data);
  }

  deletePost(data) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${data.id}`);
  }
}
