import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../../services/blog/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.less']
})
export class UploadComponent implements OnInit {

  filename: string = "Choose file";

  @Input() title: string;
  file: File;

  constructor(private router: Router, private blogService: BlogService) { }

  ngOnInit() {
  }

  upload(){
    this.blogService.startUpload(this.title, this.file.name).subscribe(
      (uploadUrl: string) => {
        this.blogService.completeUpload(uploadUrl, this.file).subscribe(
          data => this.router.navigate(['/home']),
          error => console.log(error)
        );
      },
      error => console.error(error)
    );
  }

  fileChangeEvent(event){
    let fileList: FileList = event.target.files;
    if(fileList.length > 0){
      this.file = fileList[0];
      this.filename = this.file.name;
    }
  }
}
