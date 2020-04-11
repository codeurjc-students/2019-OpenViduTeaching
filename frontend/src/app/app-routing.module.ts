import { VideoComponent } from './video/video.component';
import { InviteComponent } from './invite/invite.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VideoRoomComponent } from './video-room/video-room.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: ':roomName', component: VideoRoomComponent },
  { path: ':roomName/video/:video', component: VideoComponent},
  { path: 'invite/:code', component: InviteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
