function findAuthorById(authors, id)
{
  return getAuthor(authors, id);
}

function getAuthor(authors, id)
{
  return authors.find((name)=> name.id === id);
}

function findBookById(books, id) 
{
  return books.find((book)=> book.id === id);
}

function getborrows(books)
{
  const borrowed = books.filter((book) => book.borrows[0].returned === false);
}
function partitionBooksByBorrowedStatus(books) 
{
  let result = [];

  const borrowed = books.filter((book) => book.borrows[0].returned === false);
  
  const returned = books.filter((book) => book.borrows[0].returned === true);
   
  result.push(borrowed);
  result.push(returned);
    
  return result;
}

function getBorrowersForBook(book, accounts) 
{
  let result = book.borrows.map((borrows)=>{
    let match = accounts.find(match=> match.id === borrows.id)
    return {...borrows, ...match}; 
  });
  
  return result.splice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
