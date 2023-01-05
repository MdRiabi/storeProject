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
    updateOn:  null,
  },

  {
    sku: "text101",
    name:"C# Crash Course ",
    description: "Learn C# programming languange form skratch",
    unitPrice: 700,
    imageUrl: "assets/images/books/text-101.png",
    active: true,
    unitsInStock: 100,
    createOn: new Date(),
    updateOn:  null,
  },

  {
    sku: "text102",
    name:"C++ Programming Language",
    description: "Learn C++ programming languange form skratch",
    unitPrice: 600,
    imageUrl: "assets/images/books/text-102.png",
    active: true,
    unitsInStock: 100,
    createOn: new Date(),
    updateOn:  null,
  },

  {
    sku: "text103",
    name:"Cracking the CODING INTERVIEW",
    description: "Learn More than 189 programming questions",
    unitPrice: 900,
    imageUrl: "assets/images/books/text-103.png",
    active: true,
    unitsInStock: 150,
    createOn: new Date(),
    updateOn:  null,
  },

  {
    sku: "text104",
    name:"Data structures And Algorithms",
    description: "Learn Data structures And Algorithms form skratch",
    unitPrice: 1200,
    imageUrl: "assets/images/books/text-104.png",
    active: true,
    unitsInStock: 520,
    createOn: new Date(),
    updateOn:  null,
  },

  {
    sku: "text105",
    name:" Head First Design Patterns",
    description: "Learn Design Patterns form skratch",
    unitPrice: 1000,
    imageUrl: "assets/images/books/text-105.png",
    active: true,
    unitsInStock: 250,
    createOn: new Date(),
    updateOn:  null,
  },

  {
    sku: "text106",
    name:"JAVA Crash Course",
    description: "Learn the Basics of Java Programming form skratch",
    unitPrice: 1500,
    imageUrl: "assets/images/books/text-106.png",
    active: true,
    unitsInStock: 600,
    createOn: new Date(),
    updateOn:  null,
  },

  {
    sku: "text107",
    name:"Machine Learning With PYTHON ",
    description: "STEP BY STEP METHODS TO MASTER MACHINE LEARNING WITH PYTHON",
    unitPrice: 1700,
    imageUrl: "assets/images/books/text-107.png",
    active: true,
    unitsInStock: 750,
    createOn: new Date(),
    updateOn:  null,
  },

  {
    sku: "text108",
    name:"Practical API DESIGN",
    description: "Confessions of a JAVA framework Architect",
    unitPrice: 1700,
    imageUrl: "assets/images/books/text-108.png",
    active: true,
    unitsInStock: 850,
    createOn: new Date(),
    updateOn:  null,
  },

  {
    sku: "text109",
    name:"PYTHON PROGRAMMING ",
    description: "A Begninners Guide to Learn PYTHON IN 7 DAYS",
    unitPrice: 2000,
    imageUrl: "assets/images/books/text-109.png",
    active: true,
    unitsInStock: 120,
    createOn: new Date(),
    updateOn:  null,
  }
]
}
