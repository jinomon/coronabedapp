import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-coronabedstatus',
  templateUrl: './coronabedstatus.component.html',
  styleUrls: ['./coronabedstatus.component.css']
})
export class CoronabedstatusComponent implements OnInit {

  constructor(private api:ApiService) { this.datafromapi()}

 
  datafromapi=()=>{
    this.api.fetchcoronabed().subscribe(
      (response:any)=>{
        this.coronabed=response.data.regional
      }
    )
  }


  coronabed:any=[]


  ngOnInit(): void {
  }

}
