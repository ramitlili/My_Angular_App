import { Injectable } from "@angular/core";
import { FaceSnap } from "../Models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapService {
    
      FaceSnaps: FaceSnap[] = [
        {
          id: 1,
          title:'Ramy Tlili',
          description:'Learning Angular',
          imageUrl:
          'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          createdDate:new Date(),
          snaps:500,
          snops:150,
          location:'Paris'},
        {
          id: 2,
          title:'Samar gharsallah',
          description:'Learning Angular',
          imageUrl:
          'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          createdDate:new Date(),
          snaps:150,
          snops:2}
       ]
    
  getAllFaceSnaps(): FaceSnap[] {
    return this.FaceSnaps;
  }
  snapFaceSnapById(FaceSnapId : number,snapType : 'snap' | 'unsnap') :void {
    const faceSnap = this.getFaceSnapById(FaceSnapId);
    snapType === "snap" ? faceSnap.snaps++ : faceSnap.snaps--;
  }
  unsnapFaceSnapById(FaceSnapId: number): void {
    const faceSnap = this.FaceSnaps.find(faceSnap => faceSnap.id === FaceSnapId);
    if (faceSnap) {
        faceSnap.snaps--;
    } else {
        throw new Error('FaceSnap not found!');
    }
}
getFaceSnapById(FaceSnapId: number): FaceSnap {
  const faceSnap = this.FaceSnaps.find(faceSnap => faceSnap.id === FaceSnapId);
  if(!faceSnap) {
    throw new Error('FaceSnap not found!');
  } 
  else {
    return faceSnap;
  } 
}
}