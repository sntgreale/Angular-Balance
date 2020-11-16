import { Component } from '@angular/core';
import { LocalstorageService } from './service/localstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ LocalstorageService ]
})

export class AppComponent {

  constructor (public localstorage: LocalstorageService) {}

  ngOnInit (): void {
    if ( this.localstorage.getCategories() !== null ) {
      this.categories = this.localstorage.getCategories()
    }
  }

  title = 'myApp';

  dates: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

  categories: { name: string, description: string }[] = []

  /*
  categories: { name: string, description: string }[] = [
    { name: "SERVICIOS", description: "pago de servicios"},
    { name: "EDUCACIÓN", description: "pago escuela"},
    { name: "ALIMENTOS", description: "supermercado"},
    { name: "OTROS", description: "hobbies"},
  ]
  */

  /*
  transactions: { name: string, description: string, date: string, category: string, price: number, transaction: string }[] = [
    { name: "Example 01", description: "Example Description 01", date: "Enero", category: "SERVICIOS - pago de servicios", price: 1234, transaction: "Ingreso" },
    { name: "Example 02", description: "Example Description 02", date: "Enero", category: "EDUCACIÓN - pago escuela", price: 1234, transaction: "Egreso" },
    { name: "Example 03", description: "Example Description 03", date: "Enero", category: "ALIMENTOS - supermercado", price: 1234, transaction: "Ingreso" },
    { name: "Example 04", description: "Example Description 04", date: "Enero", category: "OTROS - hobbies", price: 1234, transaction: "Egreso" },
    { name: "Example 05", description: "Example Description 05", date: "Enero", category: "SERVICIOS - pago de servicios", price: 1234, transaction: "Ingreso" },
    { name: "Example 06", description: "Example Description 06", date: "Enero", category: "EDUCACIÓN - pago escuela", price: 1234, transaction: "Egreso" },
    { name: "Example 07", description: "Example Description 07", date: "Enero", category: "ALIMENTOS - supermercado", price: 1234, transaction: "Ingreso" },
    { name: "Example 08", description: "Example Description 08", date: "Enero", category: "OTROS - hobbies", price: 1234, transaction: "Egreso" },

    { name: "Example 09", description: "Example Description 09", date: "Febrero", category: "SERVICIOS - pago de servicios", price: 1234, transaction: "Egreso" },
    { name: "Example 10", description: "Example Description 12", date: "Febrero", category: "EDUCACIÓN - pago escuela", price: 1234, transaction: "Ingreso" },
    { name: "Example 11", description: "Example Description 13", date: "Febrero", category: "ALIMENTOS - supermecado", price: 1234, transaction: "Egreso" },
    { name: "Example 12", description: "Example Description 14", date: "Febrero", category: "OTROS - hobbies", price: 1234, transaction: "Ingreso" },
    { name: "Example 13", description: "Example Description 15", date: "Febrero", category: "SERVICIOS - pago de servicios", price: 1234, transaction: "Egreso" },
    { name: "Example 14", description: "Example Description 16", date: "Febrero", category: "EDUCACIÓN - pago escuela", price: 1234, transaction: "Ingreso" },
    { name: "Example 15", description: "Example Description 17", date: "Febrero", category: "ALIMENTOS - supermercado", price: 1234, transaction: "Egreso" },
    { name: "Example 16", description: "Example Description 18", date: "Febrero", category: "OTROS - hobbies", price: 1234, transaction: "Ingreso" },

    { name: "Example 19", description: "Example Description 19", date: "Marzo", category: "SERVICIOS - pago de servicios", price: 1234, transaction: "Ingreso" },
    { name: "Example 20", description: "Example Description 20", date: "Marzo", category: "EDUCACIÓN - pago escuela", price: 1234, transaction: "Egreso" },
    { name: "Example 21", description: "Example Description 21", date: "Marzo", category: "ALIMENTOS - supermercado", price: 1234, transaction: "Ingreso" },
    { name: "Example 22", description: "Example Description 22", date: "Marzo", category: "OTROS - hobbies", price: 1234, transaction: "Egreso" },
    { name: "Example 23", description: "Example Description 23", date: "Marzo", category: "SERVICIOS - pago de servicios", price: 1234, transaction: "Ingreso" },
    { name: "Example 24", description: "Example Description 24", date: "Marzo", category: "EDUCACIÓN - pago escuela", price: 1234, transaction: "Egreso" },
    { name: "Example 25", description: "Example Description 25", date: "Marzo", category: "ALIMENTOS - supermercado", price: 1234, transaction: "Ingreso" },
    { name: "Example 26", description: "Example Description 26", date: "Marzo", category: "OTROS - hobbies", price: 1234, transaction: "Egreso" },

    { name: "Example 27", description: "Example Description 27", date: "Abril", category: "SERVICIOS - pago de servicios", price: 1234, transaction: "Egreso" },
    { name: "Example 28", description: "Example Description 28", date: "Abril", category: "EDUCACIÓN - pago escuela", price: 1234, transaction: "Ingreso" },
    { name: "Example 29", description: "Example Description 29", date: "Abril", category: "ALIMENTOS - supermercado", price: 1234, transaction: "Egreso" },
    { name: "Example 30", description: "Example Description 30", date: "Abril", category: "OTROS - hobbies", price: 1234, transaction: "Ingreso" },
    { name: "Example 31", description: "Example Description 31", date: "Abril", category: "SERVICIOS - pago de servicios", price: 1234, transaction: "Egreso" },
    { name: "Example 32", description: "Example Description 32", date: "Abril", category: "EDUCACIÓN - pago escuela", price: 1234, transaction: "Ingreso" },
    { name: "Example 33", description: "Example Description 33", date: "Abril", category: "ALIMENTOS - supermercado", price: 1234, transaction: "Egreso" },
    { name: "Example 34", description: "Example Description 34", date: "Abril", category: "OTROS - hobbies", price: 1234, transaction: "Ingreso" },
  ]
  */

  
  transactions: { name: string, description: string, date: string, category: string, price: number, transaction: string }[] = []

  transactionsDisplayed: { name: string, description: string, date: string, category: string, price: number, transaction: string }[] = []

  entry: number = 0
  egress: number = 0
  total: number = 0

  addCategory (category, desCategory) {
    if( category.value !== "") {
      let newCat = category.value.toUpperCase()
      let newDesCat = desCategory.value.toLowerCase()
      this.categories.push({
        name: newCat,
        description: newDesCat,
      })
      this.localstorage.setCategories({
        name: newCat,
        description: newDesCat,
      })
      category.value = '';
      desCategory.value = '';
    }
    return false;
  }

  addTransaction (name, description, price, category, date, transaction, dateFilter, categoryFilter, transactionFilter) {
    if ( (name.value !== "") && (description.value !== "") && (price.value !== "") && (category.value !== "") ) {
      this.transactions.push({
        name: name.value,
        description: description.value,
        price: Math.abs(price.value),
        category: category.value,
        date: date.value,
        transaction: transaction.value
      })
      this.localstorage.setTransaction({
        name: name.value,
        description: description.value,
        price: Math.abs(price.value),
        category: category.value,
        date: date.value,
        transaction: transaction.value
      })
      this.filterByCategory(dateFilter, categoryFilter, transactionFilter)
      // Reseteo valores input formulario
      name.value = "";
      description.value = "";
      price.value = "";
    }
    return false;
  }

  filterByCategory (dateFilter, categoryFilter, transactionFilter) {
    this.transactionsDisplayed = this.transactions
    if ( dateFilter.value !== 'CUALQUIERA' ) {
      this.transactionsDisplayed = this.transactionsDisplayed.filter(item => item.date === dateFilter.value)
    }
    if ( categoryFilter.value !== 'CUALQUIERA' ) {
      this.transactionsDisplayed = this.transactionsDisplayed.filter(item => item.category === categoryFilter.value)
    }
    if ( transactionFilter.value !== 'CUALQUIERA' ) {
      this.transactionsDisplayed = this.transactionsDisplayed.filter(item => item.transaction === transactionFilter.value)
    }
    this.calculateBalance()
  }

  calculateBalance () { // Function used to calculate the balance sheet (depending on the filters entered by the user)
    this.entry = 0
    this.egress = 0
    this.total = 0

    for ( let i = 0; i < this.transactionsDisplayed.length; i++ ) {
      if ( this.transactionsDisplayed[i].transaction === 'Ingreso' ) {
        this.entry += this.transactionsDisplayed[i].price
        this.total += this.transactionsDisplayed[i].price
      } else {
        this.egress -= this.transactionsDisplayed[i].price
        this.total -= this.transactionsDisplayed[i].price
      }
    }
  }

  historicalRecord (dateFilter, categoryFilter, transactionFilter) {
    if ( this.localstorage.getTransaction() !== null ) {
      this.transactions = this.localstorage.getTransaction()
      this.filterByCategory(dateFilter, categoryFilter, transactionFilter)
    }
    this.calculateBalance()
  }

}