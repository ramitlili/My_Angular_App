import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../Models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.css']
})

export class MyFirstComponentComponent implements OnInit {
  @Input() FaceSnap!: FaceSnap;

  title!: string;
  description!: string;
  createdDate!: Date;
  imageUrl!: string;
  snaps!: number;
  snops!: number;
  buttonText!: string;
  buttonText1!: string;

  constructor(private FaceSnapService : FaceSnapService,private router: Router) { }

  ngOnInit(): void {
    this.title = 'Ramy Tlili';
    this.description = 'Learning Angular';
    this.createdDate = new Date();
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.snaps = 6;
    this.snops = 5;
    this.buttonText = 'Oh Snap!';
    this.buttonText1 = 'Oh Snop!';
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
  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.FaceSnap.id}`)
  }
}
