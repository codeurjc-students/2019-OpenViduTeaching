import { OpenViduService } from './../../services/open-vidu.service';
import { UserService } from './../../services/user.service';
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
  @Input() isRaiseHand: boolean;
  @Input() roomName: string;
  @Input() connectionId: string;

  backgroundColor: string;
  letterColor: string;

  constructor(
    private userSrv: UserService,
    private openviduSrv: OpenViduService
  ) { }

  ngOnInit() {
    if(this.color==='dark') {
      this.backgroundColor = '#333333';
      this.letterColor = '#ffffff';
    } else if(this.color==='light'){
      this.backgroundColor = 'white';
      this.letterColor = 'rgba(0, 0, 0, 0.87)';
    } else if(this.color==='accent'){
      this.backgroundColor = 'rgb(255, 193, 7)';
      this.letterColor = 'rgb(0, 0, 0)';
    }
  }

  sendSignalLowerHand() {
    this.openviduSrv.sendSignal(this.roomName, 'lowerYourHand', [this.connectionId],{}).subscribe(
      (_) => {},
      error => console.error(error) 
    );
  }
}
