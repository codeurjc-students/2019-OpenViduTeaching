import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'popup-component',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Input() subtitle: string;
  @Input() userName: string;
  @Input() userAvatar: string;
  @Input() content: string;

  constructor() { }

  ngOnInit() {
  }

}
