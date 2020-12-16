import {Component, OnInit, ViewChild} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-alert-selfclosing',
   templateUrl: './alert.component.html'
})
export class NgbdAlertSelfclosing implements OnInit {
  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage = '';

  @ViewChild('staticAlert', {static: false}) staticAlert: NgbAlert;
  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert;

  ngOnInit(): void {
    setTimeout(() => this.staticAlert.close(), 5000);
  }

  public changeSuccessMessage() { this._success.next(`${new Date()} - Message successfully changed.`); }
}
