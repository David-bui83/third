import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  errors:any;
  pro_id:string;
  isDisabled:boolean=false;
  pro={
    name:'',
    qty:0,
    price:0
  }
  constructor(private _httpService: HttpService,private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      this.pro_id = params['id'];
    });
    console.log(this.pro_id);
    this.getOnePro();
  }
  getOnePro(){
    this._httpService.getOne(this.pro_id).subscribe(data=>{
      this.pro=data['data']
    });
  }
  updateOnePro(id){
    console.log(id)
    this._httpService.updateOne(id,this.pro).subscribe(data=>{
      console.log(data);
      if(data['message']==='error'){
        this.errors = data['data']['errors'];
      }else{
        this._router.navigate(['']);
      }
    })
  }
  reload(){
    window.location.reload()
  }
}
