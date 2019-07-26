import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  pro_id:any;
  isDisabled:boolean=true;
  noshow:boolean=true;
  pro={
    name:'',
    qty:0,
    price:0
  }
  constructor(private _httpService: HttpService,private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.pro={
      name:'',
      qty:0,
      price:0
    }
    this._route.params.subscribe((params:Params)=>{

      this.pro_id = params['id'];
      console.log('jgjgjhg',this.pro_id)
    });
    this.getOnePro();
    // this.delPro();
  }
  getOnePro(){
    this._httpService.getOne(this.pro_id).subscribe(data=>{
      this.pro=data['data'];
      console.log(this.pro); 
      if(this.pro.qty == 0){
        this.isDisabled = false;
      }else{
        this.isDisabled = true;
      }
    })
  }
  delPro(p_id){
    console.log('delete form view: ',p_id)
    this._httpService.destroy(p_id).subscribe(data=>{
      console.log(data);
      this._router.navigate(['']);
    });

  }
}
