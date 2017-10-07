import { Component, OnInit } from '@angular/core';
import { NgSwitch } from '@angular/common';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { FormQuotesComponent } from '../form-quotes/form-quotes.component';

@Component({
  selector: 'app-modals',
  templateUrl: './app-modals.component.html',
  styleUrls: ['./app-modals.component.scss']
})
export class AppModalsComponent implements OnInit {
  public modalType: string;
  public callbackFunc: any;

  constructor(public bsModalRef: BsModalRef) {
  }

  ngOnInit () {
  }
}
