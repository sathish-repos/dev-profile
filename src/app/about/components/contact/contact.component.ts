import { Component } from '@angular/core';
import { CdkCopyToClipboard } from '@angular/cdk/clipboard';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'sat-contact',
  standalone: true,
  imports: [CdkCopyToClipboard],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contact: {
    title: string;
    description: string;
    phone: {
      label: SafeHtml | string;
      value: string;
    };
    email: {
      label: SafeHtml | string;
      value: string;
    };
  };

  private phoneLabel: string;
  private emailLabel: string;

  constructor(private sanitizer: DomSanitizer) {
    this.phoneLabel = `Ph No.: 6380891338 <a href="tel:+916380891338"><i class="bi bi-phone link-dark"></i></a>`;
    this.emailLabel = `me.sathish.git@gmail.com <i class="bi bi-copy" [cdkCopyToClipboard]="me.sathish.git@gmail.com"></i>`;

    this.contact = {
      title: 'Contacts',
      description: `Feel free to reach out for projects, collaborations, or just to say hello!
      Currently seeking new opportunities.`,
      phone: {
        label: this.sanitizer.bypassSecurityTrustHtml(this.phoneLabel),
        value: '6380891338',
      },
      email: {
        label: this.sanitizer.bypassSecurityTrustHtml(this.emailLabel),
        value: 'me.sathish.git@gmail.com',
      },
    };
  }

  onCopy(contactType: string) {
    if (contactType === 'email') {
      this.contact.email.label = 'Email ID Copied!';
      setTimeout(() => {
        this.contact.email.label = this.sanitizer.bypassSecurityTrustHtml(this.emailLabel);
      }, 800);
    } else {
      this.contact.phone.label = 'Phone No. Copied!';
      setTimeout(() => {
        this.contact.phone.label = this.sanitizer.bypassSecurityTrustHtml(this.phoneLabel);
      }, 800);
    }
  }
}
