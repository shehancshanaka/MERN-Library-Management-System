import React, { useState } from "react";
import Table from "../../components/Table";
import { FluidContainer } from "../../components/commonComponents";
import Book from "./Book";

const Books = ({ catalog }) => {
const [selectedBookId,setSelectedBookId]=useState(null)
  const handleTabRowClick = (id) => {
  
    console.log(id);
    selectedBookId(id);

  };
  const handleBookViewBackClick = () => {
    
    setSelectedBookId(null);

  }
  return (
    setSelectedBookId === null ?
    <FluidContainer>
      <Table data={catalog} handleRowClick={handleTabRowClick} instructions="Click row to view Book" />
      </FluidContainer>
      : <Book id={selectedBookId} handleBackClick={handleBookViewBackClick}/>
  );
};
export default Books;
