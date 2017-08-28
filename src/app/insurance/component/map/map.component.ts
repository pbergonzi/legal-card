import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  lat: number;
  lng: number;

  constructor() {}

  ngOnInit(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {

        /*setting up your current location*/
        this.lat = position.coords.latitude || 51.678418;
        this.lng = position.coords.longitude || 7.809007;
        console.log(position.coords);
      });
    }
  }

}
