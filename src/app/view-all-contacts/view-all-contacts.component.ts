import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-contacts',
  templateUrl: './view-all-contacts.component.html',
  styleUrls: ['./view-all-contacts.component.css']
})
export class ViewAllContactsComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
  fetchData=()=>{
    this.myapi.viewAllContact().subscribe((data)=>{
      this.contactData=data
    })
  }
  contactData:any={}
  ngOnInit(): void {
  }

}
