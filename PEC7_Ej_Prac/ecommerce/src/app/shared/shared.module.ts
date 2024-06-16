import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [DefaultImagePipe],
  imports: [CommonModule],
  exports: [DefaultImagePipe],
  providers: [AuthGuard]
})
export class SharedModule { }
