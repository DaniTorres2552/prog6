import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AngularFirestore} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private firestore:AngularFirestore) { }

  create_NewStudnet(record)
  {
    return this.firestore.collection('Student').add(record);
  }

  read_student()
  {
    return this.firestore.collection('Student').snapshotChanges();
  }

  create_NewPadreFilia(record)
  {
    return this.firestore.collection('PadreFilia').add(record);
  }

  read_PadreFilia()
  {
    return this.firestore.collection('PadreFilia').snapshotChanges();
  }


}
