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
  @Input() color: string;

  backgroundColor: string;
  letterColor: string;

  constructor() { }

  ngOnInit() {
    if(this.color==='dark') {
      this.backgroundColor = '#494949';
      this.letterColor = '#ffffff';
    } else {
      this.backgroundColor = 'white';
      this.letterColor = 'rgba(0, 0, 0, 0.87)';
    }
  }

}
