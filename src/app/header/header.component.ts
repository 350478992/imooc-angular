import {Component, OnInit} from '@angular/core';
import {SocketService} from "./socket.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = environment.appTitle;
  public messageCount = 0;

  constructor(public sockService: SocketService) {
  }

  ngOnInit() {
    this.sockService.createObservableSocket(
      "ws://localhost:8085"
    ).map(event => JSON.parse(event))
      .subscribe(
        event=>this.messageCount=event.messageCount
      );
  }

}
