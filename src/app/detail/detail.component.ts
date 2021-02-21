import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() patientId;
  shouldScan = false;
  patientData = null;
  data = [
    {
      id: 123456,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496'
        }
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
      },
      record: [
        { date: '02-11-2020', medicine: ['Metformin', 'Amlodipine'] },
        { date: '02-11-2020', medicine: ['Metoprolol', 'Omeprazole'] }
      ]
    },
    {
      id: 26589,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      address: {
        street: 'Victor Plains',
        suite: 'Suite 879',
        city: 'Wisokyburgh',
        zipcode: '90566-7771',
        geo: {
          lat: '-43.9509',
          lng: '-34.4618'
        }
      },
      phone: '010-692-6593 x09125',
      website: 'anastasia.net',
      company: {
        name: 'Deckow-Crist',
        catchPhrase: 'Proactive didactic contingency',
        bs: 'synergize scalable supply-chains'
      },
      record: [
        { date: '11/02/2021', medicine: ['Metformin', 'Amlodipine'] },
        { date: '22/02/2021', medicine: ['Metoprolol', 'Omeprazole'] }
      ]
    },
    {
      id: 698852,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      address: {
        street: 'Douglas Extension',
        suite: 'Suite 847',
        city: 'McKenziehaven',
        zipcode: '59590-4157',
        geo: {
          lat: '-68.6102',
          lng: '-47.0653'
        }
      },
      phone: '1-463-123-4447',
      website: 'ramiro.info',
      company: {
        name: 'Romaguera-Jacobson',
        catchPhrase: 'Face to face bifurcated interface',
        bs: 'e-enable strategic applications'
      },
      record: [
        { date: '11/02/2021', medicine: ['Metformin', 'Amlodipine'] },
        { date: '22/02/2021', medicine: ['Metoprolol', 'Omeprazole'] }
      ]
    },
    {
      id: 569369,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      address: {
        street: 'Hoeger Mall',
        suite: 'Apt. 692',
        city: 'South Elvis',
        zipcode: '53919-4257',
        geo: {
          lat: '29.4572',
          lng: '-164.2990'
        }
      },
      phone: '493-170-9623 x156',
      website: 'kale.biz',
      company: {
        name: 'Robel-Corkery',
        catchPhrase: 'Multi-tiered zero tolerance productivity',
        bs: 'transition cutting-edge web services'
      },
      record: [
        { date: '11/02/2021', medicine: ['Metformin', 'Amlodipine'] },
        { date: '22/02/2021', medicine: ['Metoprolol', 'Omeprazole'] }
      ]
    },
    {
      id: 63692,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      address: {
        street: 'Skiles Walks',
        suite: 'Suite 351',
        city: 'Roscoeview',
        zipcode: '33263',
        geo: {
          lat: '-31.8129',
          lng: '62.5342'
        }
      },
      phone: '(254)954-1289',
      website: 'demarco.info',
      company: {
        name: 'Keebler LLC',
        catchPhrase: 'User-centric fault-tolerant solution',
        bs: 'revolutionize end-to-end systems'
      },
      record: [
        { date: '21/01/2021', medicine: ['Losartan', 'Albuterol'] },
        { date: '11/02/2021', medicine: ['Metformin', 'Amlodipine'] },
        { date: '22/02/2021', medicine: ['Metoprolol', 'Omeprazole'] }
      ]
    }
  ];
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  submit(): void {
    const patientData = this.data.filter((data) => data.id === parseInt(this.patientId, 10));
    if (patientData.length === 1) {
      this.shouldScan = false;
      this.patientData = patientData[0];
      console.log(patientData[0]);
    } else {
      this.snackBar.open('Patient Detail not found', null, {
        duration: 2000,
      });
      this.patientData = null;
    }
  }

  scan(): void {
    this.shouldScan = true;
  }

  cancel(): void {
    this.shouldScan = false;
  }

  onCodeResult(resultString: string): void {
    this.patientId = resultString;
    this.submit();
  }
}
