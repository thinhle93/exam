import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-reviewrest',
  templateUrl: './reviewrest.component.html',
  styleUrls: ['./reviewrest.component.css']
})
export class ReviewrestComponent implements OnInit {
  currestid: any;
  curreviews: any;
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
    this.getreviews();
  }

getreviews(){
  let reviews = this._httpService.allreviews(this.currestid);
  reviews.subscribe(data =>{
    console.log(data)
    this.curreviews = data['0']['reviews']
    console.log(this.curreviews)
  })
}

  addreview(id){
    this._router.navigate(['/newreview/'+id])
  }
}

  

