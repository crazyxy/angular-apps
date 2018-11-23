/**
 * @file             : message.service.ts
 * @author           : Yan Xue <xuey@microsoft.com>
 * Date              : 22/11/2018
 * Last Modified Date: 22/11/2018
 * Last Modified By  : Yan Xue <xuey@microsoft.com>
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  add(message: string){
    this.messages.push(message);
  }

  clear(){
    this.messages = [];
  }

  constructor() { }
}
