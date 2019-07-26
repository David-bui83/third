import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  errors:any;
  newPro={
    name:'',
    qty:0,
    price:0
  }
  constructor(private _httpService: HttpService,private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.newPro={
      name:'',
      qty:0,
      price:0
    }
  }
  postOnePro(){
    console.log(this.newPro);
    this._httpService.postOne(this.newPro).subscribe(data=>{
      console.log(data['message']);
      // if(data['data'].errors){
      //   this.errors = data['data'].errors
      // }
      if(data['message']==='error'){
        this.errors = data['data']['errors'];
      }else{
        this._router.navigate(['']);
      }
    });
  }

}
