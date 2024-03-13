import { Component } from '@angular/core';

@Component({
  selector: 'ns-patient-summary',
  templateUrl: './patient-summary.component.html',
  styleUrls: ['./patient-summary.component.scss']
})
export class PatientSummaryComponent {

  patientDatas:any = {
    firstName: 'Danielle',
    lastName: 'Hon',
    age: 43,
    birthDate: '1980-07-14',
    sex: 'MALE',
    gender: 'CISGENDER',
    phone: '+33 6 52 25 88 64',
    protocol: 'chimio',
    pathology : 'cancer du sein',
    protocolStartDate: '2023-10-09',
    referringPractitionerFirstName: 'Josie',
    referringPractitionerLastName: 'BALLARD',
    referringDoctorFirstName :'Alexandre',
    referringDoctorLastName : 'HINTEUR',
  };

}
