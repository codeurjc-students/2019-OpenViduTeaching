import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideoRoomComponent } from './video-room/video-room.component';
import { InviteComponent } from './invite/invite.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: ':roomName', component: VideoRoomComponent },
	{ path: ':roomName/video/:video', component: VideoComponent },
	{ path: 'invite/:code', component: InviteComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule {}
