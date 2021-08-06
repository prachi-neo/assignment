export function book(title, author) {
  this.title = title
  this.author = author
}

book.prototype.concateStr = function (){
    console.log(this.title + ' ' + this.author + ' ' + this.price + ' ' + this.pages)
}
