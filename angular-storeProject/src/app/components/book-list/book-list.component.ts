import { Component, OnInit } from '@angular/core';
import { Book } from "../../common/book";
import { BookService } from "../../services/book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private _bookservice: BookService) { }

  ngOnInit(): void {
    this.listBooks()
  }

  books: Book[] = []

  listBooks() {
    this._bookservice.getBooks().subscribe(

      data => this.books = data

    )
  }
  

  checkfunc(book: Book) {
    try {
return book
    }
    catch(e){
      return undefined
    }
  }

}
