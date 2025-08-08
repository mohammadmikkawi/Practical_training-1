let book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 180,
  description: function() {
    console.log(`${this.title} by ${this.author}, ${this.pages} pages`);
  }
};

book.description();
