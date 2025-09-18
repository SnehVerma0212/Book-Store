const { default: mongoose } = require("mongoose");
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
      
      // Adding pagination with default limit of every page to  be 10.
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page-1)*limit;

      const allBooks = await Book.find().skip(skip).limit(limit);
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

const updateBook = async(req,res) => {
    try{
        const { id } = req.params;
        const updatedBook = req.body;
        if(!mongoose.Types.ObjectId.isValid(id)){
          return res.status(400).json({
            msg: "Invalid book id."
          })
        } 
        const findBook = await Book.findByIdAndUpdate(id, updatedBook, {new: true});
        if(!findBook){
          return res.status(404).json({
            msg: "Book not found."
          })
        }
        res.status(200).json({
          msg: "Book updated successfully."
        })
    }catch(err){
      return res.status(500).json({
        msg: "Internal server error."
      })
    }
}

const deleteBook = async(req,res) => {
  try{
    const { id }= req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).json({
        msg: "Invalid book id."
      })
    }
    const deletedBook = await Book.findByIdAndDelete(id);
    if(!deletedBook){
      return res.status(404).json({
        msg: "Book not found!"
      })
    }
    res.status(200).json({
      msg: "Book deleted successfully."
    })
  }catch(err){
    console.log(err.message);
    return res.status(500).json({
      msg: "Internal server error."
    })
  }
}

module.exports = {
    addBook,
    getBook,
    updateBook,
    deleteBook
}