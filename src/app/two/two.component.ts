import { Component, OnInit } from '@angular/core';
import { PersonasService } from './../_services/_services/personas.service';


@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})



export class TwoComponent implements OnInit {

  students: any;

  padreFiliaNombre: string;
  padreFiliaCedula: number;
  padreFiliaCelular: number;
  padreFiliaCorreo: string;
  padreFiliaPass: string;

  
  studentName: string;
  studentAge: number;
  studentAddres: string;
  //personas:Personas[];


  constructor(private crudService: PersonasService) { }

  ngOnInit() {

    this.crudService.read_PadreFilia().subscribe(data => {
      this.students = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          nombre: e.payload.doc.data()['nombre'],
          cedula: e.payload.doc.data()['cedula'], 
          celular: e.payload.doc.data()['celular'],
          correo: e.payload.doc.data()['correo'],
          pass: e.payload.doc.data()['pass'],
        };
      })
    })
  }


  createRecord() {
    let record = {};
    record['nombre'] = this.padreFiliaNombre;
    record['cedula'] = this.padreFiliaCedula;
    record['celular'] = this.padreFiliaCelular;
    record['correo'] = this.padreFiliaCorreo;
    record['pass'] = this.padreFiliaPass;    

    this.crudService.create_NewPadreFilia(record).then(resp => {
      this.padreFiliaNombre = "";
      this.padreFiliaCedula = undefined;
      this.padreFiliaCelular = undefined;
      this.padreFiliaCorreo = "";
      this.padreFiliaPass = "";
      console.log(resp);

    })
      .catch(error => {
        console.log(error);
      });
  }


createRecordse()
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



}
