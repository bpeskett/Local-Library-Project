function findAccountById(accounts, id) 
{
   return accounts.find((name) => name.id === id);
}

function sortAccountsByLastName(accounts) 
{
  return accounts.sort((s1, s2)=> s1.name.last > s2.name.last ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) 
{
  let result = 0;
  
  for (let i = 0; i<books.length; i++)
    {
      books[i].borrows.forEach(borrow => 
        {
          if(borrow.id === account.id)
          {
            result++;
          }
        });
    }
  return result;
}

function getBooksPossessedByAccount(account, books, authors) 
{
  let result = [];
 
  const filteredBook = books.filter((book) => 
    { 
    return book.borrows.some((borrow) => borrow.id === account.id && !borrow.returned); 
    });
  
  filteredBook.forEach(book => {
     const author = authors.find(author => author.id === book.authorId)
     const newBook = {...book, author};
    result.push(newBook);
    });
  return result;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
