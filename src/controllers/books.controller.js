const Book = require("./../models/book.model");

const addBook = async(req,res) => {
    try{
        const { title, author, genre, publishedDate } = req.body;
        if(!title || !author || !genre || !publishedDate){
            return res.status(400).json({
                msg: "Incomplete Details"
            })
        }
        const newBook = new Book({
            title:title,
            author:author,
            genre:genre,
            publishedDate:publishedDate
        }) 
        await newBook.save();

        res.status(200).json({
            msg: "Book saved successfully."
        })

    }catch(err){
        res.status(500).json({
            msg: "Internal server error."
        });
        console.log(err.message);
    }
}

const getBook = async (req, res) => {
  try {
    const { id } = req.params;

    if (id) {
      // Fetch single book
      const book = await Book.findById(id);
      if (!book) {
        return res.status(404).json({
          message: "Book not found with the given id.",
        });
      }
      return res.status(200).json({
        message: "Book fetched successfully.",
        data: book,
      });
    } else {
      // Fetch all books
      const allBooks = await Book.find();
      if (allBooks.length === 0) {
        return res.status(200).json({
          message: "No books available.",
          data: [],
        });
      }
      return res.status(200).json({
        message: "All books fetched successfully.",
        data: allBooks,
      });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      message: "Internal server error.",
    });
  }
};

// const updateBook = async(req,res) => {
//     try{
//         const { id } 
//     }catch(err){

//     }
// }

module.exports = {
    addBook,
    getBook
}