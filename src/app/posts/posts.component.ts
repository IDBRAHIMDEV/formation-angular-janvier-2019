import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
   
 
  contactType = [{id: 1, label: 'SMS'},{id: 2, label: 'TEL'}, {id: 3, label: 'EMAIL'}]
  edit = false;
  newPost = {
    title: "",
    body: "",
    myContact: null,
    subscribe: false,
  }

  myPosts: any[] = [];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService._getPosts()
        .subscribe((res: any[]) => {
            this.myPosts = res;
        });
  }

  addPost(f) {
    if(f.valid) {
      this.postService.createPost(this.newPost)
        .subscribe(res => {
          this.myPosts.unshift(this.newPost);
          this.newPost = {
            title: "",
            body: ""
          }
        })
    }else {
      Swal({
        title: 'Form error ',
        text: 'Please check your data in form',
        type: 'error',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          Swal(
            'Deleted!',
            'Your imaginary file has been deleted.',
            'success'
          )
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
  
  
        
      
    }
    
  }

  editPost(post) {
    this.newPost = post;
    console.log(this.newPost)
    this.edit = true
  }

  updatePost() {
    this.postService.putPost(this.newPost)
        .subscribe(res => {
          this.edit = false;
          this.newPost = {
            title: "",
            body: ""
          }
        },
        err => console.error(err))
  }


  removePost(index, id) {
    this.postService.deletePost(id)
        .subscribe(res => this.myPosts.splice(index, 1))
  }

  log(title) {
    console.log(title)
  }

}
