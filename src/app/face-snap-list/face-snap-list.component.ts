import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../Models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.css']
})
export class FaceSnapListComponent implements OnInit {
  FaceSnaps!: FaceSnap[];
  constructor(private faceSnapService : FaceSnapService) { }

  ngOnInit(): void {
    this.FaceSnaps = this.faceSnapService.getAllFaceSnaps();
  }

}
