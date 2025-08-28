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

module.exports = addBook;