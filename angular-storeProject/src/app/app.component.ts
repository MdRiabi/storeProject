import { Component } from '@angular/core';
import { Book } from './common/book';
 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
books: Book[]= [
  {
    sku: "text100",
    name:"C Programming Language",
    description: "Learn C programming languange form skratch",
    unitPrice: 600,
    imageUrl: "assets/images/books/text-100.png",
    active: true,
    unitsInStock: 100,
    createOn: new Date(),
    updateOn: null,
  }
]
}
