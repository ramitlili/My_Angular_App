import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './Models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my_first_app';
  mySnap!: FaceSnap;
  secondSnap!: FaceSnap;
  FaceSnaps!: FaceSnap[];

  ngOnInit(){
     this.mySnap = {id:1,title:'Ramy Tlili',description:'Learning Angular',imageUrl:
     'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',createdDate:new Date(),snaps:500,snops:150,location:'Paris'};
     this.secondSnap = {id:2,title:'Samar gharsallah',description:'Learning Angular',imageUrl:
     'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',createdDate:new Date(),snaps:14,snops:150};

  }
}
