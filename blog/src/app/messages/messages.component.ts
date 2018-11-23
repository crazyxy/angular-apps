/**
 * @file             : messages.component.ts
 * @author           : Yan Xue <xuey@microsoft.com>
 * Date              : 22/11/2018
 * Last Modified Date: 22/11/2018
 * Last Modified By  : Yan Xue <xuey@microsoft.com>
 */
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.less']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
