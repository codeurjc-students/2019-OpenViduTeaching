import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recording } from '../../models/recording-model';

@Injectable()
export class RecordingServiceMock {
	constructor() {}

	startRecording(roomName: string) {
		return of('roomA');
	}

	stopRecording(roomName: string) {
		return of();
	}

	isBeingRecorded(roomName: string): Observable<boolean> {
		return of(false);
	}

	isRecordingEnabled(): Observable<boolean> {
		return of(true);
	}

	getRecordings(roomName: string): Observable<Recording[]> {
		return of([{
			status: "roomA-2",
			id: "roomA",
			sessionId: "roomA-2",
			createdAt: "1521202349460",
			size: 22887561,
			duration: 132.08,
			url: "https://localhost:4443/recordings/roomA-2/roomA-2.mp4",
			recordingLayout: "BEST_FIT",
			resolution: "1920x1080",
			outputMode: ".mp4",
			customLayout: "",
			name: "roomA",
		}]);
	}
}
