import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {FormsModule} from '@angular/forms';
import { CardComponent } from './card/card.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component'

import {HttpClientModule} from '@angular/common/http';

import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import {environment} from './../environments/environment';
import { FiltroPipe } from './_pipes/_pipes/filtro.pipe';

//import {PersonasService} from './_services/personas.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TwoComponent,
    ThreeComponent,
    FiltroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  //studentsName: String;
  //studentAge: Number;
  //studentAddres: String;

  


}

