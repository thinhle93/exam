import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  allrest: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getrests();
  }

  getrests(){
    let observe = this._httpService.getallrest();
    observe.subscribe(data => {
      console.log(data);
      this.allrest = data;
    })
  }

  delrest(id){
    let currest = this._httpService.delrest(id);
    currest.subscribe(data => {
      console.log("deleting------", data)
     //this._router.navigate(['/alpha'])
    })
  }

  viewrest(id){
    this._router.navigate(['/reviewrest/'+id])
  }

  editrest(id){
    this._router.navigate(['/updaterest/'+id])
  }
}
