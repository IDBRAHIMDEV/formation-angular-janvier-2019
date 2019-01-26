import { Component } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onUpdate = false;
  title = 'Mohamed iDBRAHIM';
  currentCourse = {
    id: 0,
    title: "",
    description: "",
    active: false,
    favorite: false,
    date: new Date(),
    price: 0,
    vote:{like: 0, disLike: 0}
  };
  courses = [
    {description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aliquid nulla accusamus repudiandae ex corporis nemo, voluptatibus impedit facere voluptate!",vote:{like: 11, disLike: 0}, id: 1, date: new Date(), price: 15.25, title: "Laravel", active: true, favorite: false},
    {description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aliquid nulla accusamus repudiandae ex corporis nemo, voluptatibus impedit facere voluptate!",vote:{like: 10, disLike: 50}, id: 2, date: new Date(), price: 285.235, title: "Angular", active: true, favorite: false},
    {description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aliquid nulla accusamus repudiandae ex corporis nemo, voluptatibus impedit facere voluptate!",vote:{like: 77, disLike: 0}, id: 3, date: new Date(), price: 15.02, title: "JAVAEE", active: false, favorite: false},
    {description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aliquid nulla accusamus repudiandae ex corporis nemo, voluptatibus impedit facere voluptate!",vote:{like: 2, disLike: 10}, id: 4, date: new Date(), price: 15.897454, title: "Symfony", active: true, favorite: false},
];

  addCourse() {
    this.courses.unshift(this.currentCourse);
    this.currentCourse = {
      id: 0,
      title: "",
      description: "",
      active: false,
      favorite: false,
      date: new Date(),
      price: 0,
      vote:{like: 0, disLike: 0}
    };
  }

  deleteCourse(course) {
   console.log(course)
    Swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
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

  editCourse(course) {
    this.onUpdate = true;
    this.currentCourse = course;
  }

  updateCourse() {
    this.onUpdate = false;
  }

  togglePower(course) {
    course.active = !course.active
  }

  onFavorite(course) {
    course.favorite = !course.favorite;
  }

  UpdateLike(course, child) {
       course.vote.like = child;
  }


  UpdateDislike(course, child) {
    course.vote.disLike = child;
}

}
