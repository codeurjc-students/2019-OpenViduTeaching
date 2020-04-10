import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'settings-component',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  @Input() roomName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
