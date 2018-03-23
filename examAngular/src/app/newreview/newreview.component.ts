import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-newreview',
  templateUrl: './newreview.component.html',
  styleUrls: ['./newreview.component.css']
})
export class NewreviewComponent implements OnInit {
  newreview: any;
  currestid: any;
  error: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.currestid = params['id'];
      console.log(this.currestid)
    })
  this.newreview = {customer: "", stars: 0, desc: ""}
  }

  //do validations for empty customer and desc
  submitreview(){
    let newreview = this._httpService.addreview(this.currestid, this.newreview);
    newreview.subscribe(data => {
      console.log(data);
      if(data['message']=="Error"){
        console.log(data)
        this.error = data['error']
      }
      else{
        this._router.navigate(['/reviewrest/'+ this.currestid])
      }
    })
  }
}
