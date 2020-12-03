import { Component, OnInit } from '@angular/core';
import {Personas} from './../_interface/personas.interface';
import * as PERSONAS  from './../../assets/data/p.json';
import {HttpClient} from '@angular/common/http';

import {PersonasService} from './../_services/_services/personas.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']

})



//export class CardComponent implements OnInit {
export class CardComponent {
  
  errorMessage = '';
  students: any;
  studentName: string;
  studentAge: number;
  studentAddres: string;
  
  padreFiliaNombre: string;
  padreFiliaCedula: string;
  padreFiliaCelular: number;
  padreFiliaCorreo: string;
  padreFiliaPass: string;
  //personas:Personas[];

  //constructor(private http: HttpClient) { }
  constructor(private crudService: PersonasService,
              private router: Router,
              private afAuth: AngularFireAuth) { }
  //constructor() {}

  //ngOnInit(): void {
    ngOnInit() {
    /*
    this.personas=(PERSONAS as any).data;
    console.log(this.personas);
    */
   //this.obeterPersonas();

   this.crudService.read_student().subscribe(data=>{
     this.students = data.map(e=>{
       return{
         id: e.payload.doc.id,
         isEdit:false,
         Name: e.payload.doc.data()['Name'],
         Age: e.payload.doc.data()['Age'],
         Address: e.payload.doc.data()['Address'],       

       };
     })
   })
  }
  
  createRecord()
  {
    let record={};
    record['Name']=this.studentName;
    record['Age']=this.studentAge;
    record['Address']=this.studentAddres;
    
    this.crudService.create_NewStudnet(record).then(resp=>
      {
        this.studentName = "";
        this.studentAge = undefined;
        this.studentAddres = "";
        console.log(resp);

      })
      .catch(error=>
        {
          console.log(error);
        });
  }

  signIn() { 
    this.afAuth.signInWithEmailAndPassword(this.padreFiliaCedula, this.padreFiliaPass).then(() => {
       this.router.navigate(['/home']);
     }).catch(response => {
       this.errorMessage = response.message;
     });
    }

  /*
  obeterPersonas()
  {
    this.http.get('http://localhost/pp.json')
    .subscribe((personas:Personas[])=>
      {
        this.personas=personas;
      });
  }
  */

}
