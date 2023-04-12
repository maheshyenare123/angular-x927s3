import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
  <table>
  <thead>
  <td>
  Name
  </td>
  <td>
  Count
  </td>
  </thead>
  <tbody>
  <tr *ngFor='let item of arr' [ngClass]="(item.count>0 && item.count<3) ? 'red' : (item.count>3 && item.count<10) ?'yellow':'green'" >
  <td>{{item.name}}</td>
  <td>
  {{item.count}}
  </td>
  </tr>
  </tbody>

  </table>

  `,
})
export class App {
  name = 'Angular';
  arr = [
    {
      id: 1,
      name: 'Mahesh Yenare',
      count: 2,
    },
    {
      id: 2,
      name: 'Prem Yenare',
      count: 1,
    },
    {
      id: 3,
      name: 'Jyoti Yenare',
      count: 5,
    },
    {
      id: 1,
      name: 'Usha Yenare',
      count: 8,
    },
    {
      id: 2,
      name: 'Balasaheb Yenare',
      count: 7,
    },
    {
      id: 2,
      name: 'Balasaheb Yenare',
      count: 11,
    },
    {
      id: 2,
      name: 'Balasaheb Yenare',
      count: 12,
    },
  ];
}

bootstrapApplication(App);
