import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-updaterest',
  templateUrl: './updaterest.component.html',
  styleUrls: ['./updaterest.component.css']
})
export class UpdaterestComponent implements OnInit {
  currestid: any;
  currestdata: any;
  dataname: any;
  datacuisine: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.currestid = params['d'];
      //console.log(this.currestid)
    })
    this.currestinfo();
  }

  currestinfo(){
    let info = this._httpService.findcurrest(this.currestid);
    info.subscribe(data => {
      //console.log(data)
      if(data['message']==="Error"){
        console.log(data['error'])
      }
      else{
        this.currestdata = data;
        this.dataname = data['name'];
        this.datacuisine = data['cuisine']
        console.log(this.currestdata)
      }
    })
    
  }

  submitedit(){
    let updaterest = this._httpService.editrest(this.currestid, this.currestdata);
    updaterest.subscribe(data => {
      console.log(data)
      if(data['message']==="Error"){
        console.log(data['error'])
      }
      else{
        this._router.navigate(['/alpha'])
      }
    })
  }
}
