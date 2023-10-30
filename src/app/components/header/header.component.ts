import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  imageUrl: string = '../../../assets/jpg/photo-cent-1.jpg';

  constructor(private http: HttpClient) {}
  descargarCV() {
    const pdfUrl = '../../../assets/pdf/cv-10-2023.pdf';

    this.http.get(pdfUrl, { responseType: 'arraybuffer' }).subscribe(data => {
      const blob = new Blob([data], { type: 'application/pdf' });

      const blobUrl = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = 'cv-10-2023.pdf';
      a.click();

      window.URL.revokeObjectURL(blobUrl);
      a.remove();
    });
  }
}
