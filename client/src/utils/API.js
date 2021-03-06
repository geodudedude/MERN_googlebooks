import axios from "axios"


export default { 
    googleBooks: function(title) {
        console.log(title)
        return axios.get("/api/gbooks/" + title)
        //return axios.get("/api/google/", { params: { q: "title:" + title } }); 
    },
    saveBook: function(bookData) {
        console.log("hello from front end api")
        return axios.post("/api/books/", bookData)
    },
    loadSavedBooks: function() {
        return axios.get("/api/books/saved/")
    },
    removeBook: function(id) {
        return axios.delete("/api/books/saved/" + id)
    }
}