function getTotalBooksCount(books) 
{
 return books.length;
}

function getTotalAccountsCount(accounts) 
{
  return accounts.length;
}

function getBooksBorrowedCount(books) 
{
  let result = books.filter((book)=> 
    book.borrows.filter((borrow)=>borrow.returned===false).length>0);
    return result.length;
}

function getTotalAccountsCount(accounts) 
{
  return accounts.length;
}

function getBooksBorrowedCount(books) 
{
  let result = books.filter((book)=> 
    book.borrows.filter((borrow)=>borrow.returned===false).length>0);
    return result.length;
}

function getMostCommonGenres(books) 
{
  let result = {};
   books.forEach((book) => {
      if (result[book.genre]) {
       result[book.genre]++;
      } else {
       result[book.genre] = 1;
      }
   });
  
   result = Object.entries(result).map(([name, count]) => {
       return {
        name,
        count
       }
    });
   return result.sort((genre1, genre2)=> genre1.count < genre2.count ? 1 : -1).slice(0,5);
 
}

function getMostPopularBooks(books) 
{
  let result = [];
  
  books.reduce((name, book) =>
    {
      
      result.push({name: book.title,
                   count: book.borrows.length});
    },[]);
  return result.sort((book1, book2)=> book1.count < book2.count ?1 : -1).slice(0,5);
}

function getMostPopularAuthors(books, authors) 
{
  const result = authors.map((author)=>
    {
     const fullName = `${author.name.first} ${author.name.last}`;
     const booksByAuthor = books.filter(book=> book.authorId === author.id);
     const totalBorrows = booksByAuthor.reduce((accum, book) => accum + book.borrows.length, 0);
     const newAuthor = {name: fullName, count: totalBorrows};
     return newAuthor;
    });
  return result.sort((author1, author2)=> author1.count < author2.count ?1 : -1).slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
