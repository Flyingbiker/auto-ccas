import { Component, OnInit } from '@angular/core';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faPinterestP} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faInstagram = faInstagram;
  faFacebookF = faFacebookF;
  faLinkedinIn = faLinkedinIn;
  faPinterestP = faPinterestP;

  constructor() { }

  ngOnInit(): void {
  }

}
