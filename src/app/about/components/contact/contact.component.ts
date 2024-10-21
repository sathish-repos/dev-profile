import { Component } from '@angular/core';
import { CdkCopyToClipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'sat-contact',
  standalone: true,
  imports: [CdkCopyToClipboard],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contact = {
    title: 'Contacts',
    description: `Feel free to reach out for projects, collaborations, or just to say hello!
      Currently seeking new opportunities.`,
    phone: {
      label: `Ph No.: 6380891338 <a href="tel:+916380891338"><i class="bi bi-phone link-dark"></i></a>`,
      value: '6380891338',
    },
    email: {
      label: `me.sathish.git@gmail.com <i class="bi bi-copy" [cdkCopyToClipboard]="me.sathish.git@gmail.com"></i>`,
      value: 'me.sathish.git@gmail.com',
    },
  };

  onCopy(contactType: string) {
    if (contactType === 'email') {
      let temp = this.contact.email.label;
      this.contact.email.label = 'Email ID Copied!';
      setTimeout(() => {
        this.contact.email.label = temp;
      }, 800);
    } else {
      let temp = this.contact.phone.label;
      this.contact.phone.label = 'Phone No. Copied!';
      setTimeout(() => {
        this.contact.phone.label = temp;
      }, 800);
    }
  }
}
