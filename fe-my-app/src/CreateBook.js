import React, {useState} from "react";

function CreateBook(props){
    const {onCreate} = props;

    const [book, setBook] = useState({
        title: "",
        description: ""
    });

    const handleChange = (e) =>{
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) =>{
        e.preventDefault(); 
        onCreate(book);
    }

    return (
        <form onSubmit={onSubmit}>
            <b>ADD NEW BOOK</b>
            <br/><br/>
            <label>
                <b>Book Title:</b>&nbsp;&nbsp;
                <input name="title" type="text" value={book.title} onChange={(e) => handleChange(e)}/>
            </label>
            <br/><br/>
            <label>
            <b>Book Description:</b>&nbsp;&nbsp;
                <input name="description" type="text" value={book.description} onChange={(e) => handleChange(e)}/>
            </label>
            <br/><br/>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default CreateBook
