import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  public setTransaction (data) { // Set transactions of the user
    let transaction: { name: string, description: string, date: string, category: string, price: number, transaction: string }[] = []
    if ( !this.existTransaction() ) {
      transaction.push(data)
      localStorage.setItem('transactions', JSON.stringify(transaction));
    } else {
      transaction = this.getTransaction()
      transaction.push(data)
      localStorage.setItem('transactions', JSON.stringify(transaction))
    }
  }

  public getTransaction () { // Get transactions of the user
    let getData = JSON.parse(localStorage.getItem('transactions'));
    return getData;
  }

  public existTransaction () { // Verify if exist data of transaction on localstorage
    let existData = JSON.parse(localStorage.getItem('transactions'));
    if ( existData === null ) {
      return false
    } else {
      return true
    }
  }

  public setCategories (data) { // Set categories of the user
    let category: { name: string, description: string }[] = []
    if ( !this.existCategories() ) {
      category.push(data)
      localStorage.setItem('categories', JSON.stringify(category));
    } else {
      category = this.getCategories()
      category.push(data)
      localStorage.setItem('categories', JSON.stringify(category))
    }
  }

  public getCategories () { // Get categories of the user
    let getData = JSON.parse(localStorage.getItem('categories'));
    return getData;
  }

  public existCategories () { // Verify if exist data of categories on localstorage
    let existData = JSON.parse(localStorage.getItem('categories'));
    if ( existData === null ) {
      return false
    } else {
      return true
    }
  }

}
