import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import { OpenViduService } from '../shared/services/open-vidu.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  private roomName: string;
  private videoId: string;

  private src: string;

  constructor(
    private route: ActivatedRoute,
    private openviduSrv: OpenViduService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.roomName = params.get("roomName");
      this.videoId = params.get("video");
    });
  }
}
