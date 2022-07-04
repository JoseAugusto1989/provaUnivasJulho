import { NgForm } from '@angular/forms';
import { LibraryService } from './library.service';
import { Component, OnInit } from '@angular/core';
import {Library} from '../library/library'

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  libraryList: Library [] = []
  newLibrary: Library = {} as Library

  constructor(private service: LibraryService) { }

  ngOnInit(): void {
  }

  saveData(form: NgForm) {
    this.service.postLibrary(this.newLibrary).subscribe(item => {
      form.resetForm()
      this.newLibrary = {} as Library
      this.loadData()
    })
  }

  loadData() {
    this.service.getList().subscribe(items => {
      this.libraryList = items
    })
  }

}
