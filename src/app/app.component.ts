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
    active: false
  };
  courses = [
    {id: 1, title: "Laravel", active: true},
    {id: 2, title: "Angular", active: true},
    {id: 3, title: "JAVAEE", active: false},
    {id: 4, title: "Symfony", active: true},
];

  addCourse() {
    this.courses.unshift(this.currentCourse);
    this.currentCourse = {
      id: 0,
      title: "",
      active: false
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
}
