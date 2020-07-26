import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable()
export class ColorServiceMock {
	constructor() {}

	getTheme(): Observable<any> {
		return of({});
	}
}
