import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../Models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.css']
})
export class SingleFaceSnapComponent implements OnInit {

  FaceSnap!: FaceSnap;

  title!: string;
  description!: string;
  createdDate!: Date;
  imageUrl!: string;
  snaps!: number;
  snops!: number;
  buttonText!: string;
  buttonText1!: string;

  constructor(private FaceSnapService : FaceSnapService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.title = 'Ramy Tlili';
    this.description = 'Learning Angular';
    this.createdDate = new Date();
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.snaps = 6;
    this.snops = 5;
    this.buttonText = 'Oh Snap!';
    this.buttonText1 = 'Oh Snop!';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.FaceSnap = this.FaceSnapService.getFaceSnapById(faceSnapId);
  }

  onSnap(){
    this.snaps++;
  }
  onAddSnap(){
    if(this.buttonText == 'Oh Snap!'){
      this.FaceSnapService.snapFaceSnapById(this.FaceSnap.id,"snap");
      this.buttonText = 'Oops! UnSnap!';
    }else{ 
      this.FaceSnapService.snapFaceSnapById(this.FaceSnap.id,"unsnap");
      this.buttonText = 'Oh Snap!';
    }
  }
  onAddsnop(){
    if(this.buttonText1 == 'Oh Snop!'){
      this.FaceSnap.snops++;
      this.buttonText1 = 'Oops! UnSnop!';
    }else{ 
      this.FaceSnap.snops--;
      this.buttonText1 = 'Oh Snop!';
    }
  }
}
