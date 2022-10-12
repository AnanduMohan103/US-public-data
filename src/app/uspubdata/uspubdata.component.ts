import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-uspubdata',
  templateUrl: './uspubdata.component.html',
  styleUrls: ['./uspubdata.component.css']
})
export class UspubdataComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }

  fetchData=()=>{
    this.myapi.viewData().subscribe(
      (data)=>{
        this.usData=data
      }
    )
  }

  usData:any={}
  ngOnInit(): void {
  }

}
