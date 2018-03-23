import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-newrestaurant',
  templateUrl: './newrestaurant.component.html',
  styleUrls: ['./newrestaurant.component.css']
})
export class NewrestaurantComponent implements OnInit {
  newRest: any;
  error = [];
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.newRest = {name: "", cuisine: "", reviews: []}

  }


  //come back for desplaying validations
  submitnew(){
    let newrest = this._httpService.addRest(this.newRest);
    newrest.subscribe(data => {
      console.log(data)
      this.error = [];
      if(data['message']==="Error"){

        console.log("theres an err", data)
        if(data['error']['errors']['name']){
          this.error += data['error']['errors']['name']['message']
        }
        if(data['error']['errors']['cuisine']){
          this.error += data['error']['errors']['cuisine']['message']
        }   
        // if(!data['error']['errors']['name'] && !data['error']['errors']['cuisine']){
        //   console.log("in third error")
        //   this.error += data['error']
        // }
          
        
      }
      
      else{
        console.log("success in component", data)
        this._router.navigate(['/alpha'])
      }
      console.log(this.error);
    })
  }

}
