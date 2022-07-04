import { ListService } from './list.service';
import { List } from './list';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: List[] = [];
  newList: List = {} as List;

  saveData(myForm: NgForm) {
    this.service.postList(this.newList).subscribe(item => {
      myForm.resetForm()
      this.newList = {} as List;
      this.loadData()
    })
  }

  loadData() {
    this.service.getList().subscribe(items => {
      this.list = items
    })
  }

  constructor(private service: ListService) { }

  ngOnInit(): void {
  }

}
