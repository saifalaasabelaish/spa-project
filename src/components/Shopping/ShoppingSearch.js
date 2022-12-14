
const ShoppingSearch=()=>{
    return(
        <div className="con" >
       <form action="https://www.google.com/search" method="get" className="search-part">
        <input type="text" placeholder="search" name="q"></input>
       < button type="submit" ><img src="images/search.png" alt="search" ></img></button>
       </form>
       </div>
    )
}



export default ShoppingSearch