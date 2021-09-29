import React,{useEffect,useState} from "react";
import  Tabs  from "../../components/Tabs";
import { getBooks } from "../../api/bookAPI";
import Spinner from "../../components/Spinner";
import Books from "./Books";
const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState(null);
  useEffect(() => {
  
    setIsLoading(true);
    getBooks()
      .then((response) => {

        if (!response.error)
          
        setBooks(response.data);
       })
      .catch((error) => {
        console.log(error);

      })
      .finally(() => {
        setIsLoading(false);
    })

},[])

   const contents = [
    
     { title: "books", elements: <Books catalog={books}/>},
     {title :"Members",elements:<h1>Contents of Members go here</h1>},
     
   ]
  

  return (
    
    isLoading ?<Spinner/> : <Tabs contents={contents}/>
    
  );
};
export default Dashboard;