import { Component, OnInit } from '@angular/core';

const URL = 'http://localhost:58045/Res/Upload';

@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.css']
})
export class DocumentUploadComponent implements OnInit {

  uploadFile:any;
  hasBaseDropZoneOver:boolean = false;

  options: Object={
    url:URL
  };

  sizeLimit = 2000000;

  constructor() { }

  handleUpload(data) : void{
    if(data && data.response){
      data = JSON.parse(data.response);
      this.uploadFile = data;
    }
  }

  fileOverBase(e:any):void{
    this.hasBaseDropZoneOver = e;
  }

  beforeUpload(uploadingFile):void{
    if(uploadingFile.size > this.sizeLimit){
      uploadingFile.setAbort();
      alert('File too large');
    }
  }
  ngOnInit() {
  }

}
