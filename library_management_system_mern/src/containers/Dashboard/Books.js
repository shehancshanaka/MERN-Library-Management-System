import React from "react";
import Table from "../../components/Table";
import { FluidContainer } from "../../components/commonComponents";

const Books = ({ catalog }) => {
 const updatedCatalog = [
    ...catalog,
    {
      author: "Isuru Dharmadasa",
      burrowedDate: "",
      burrowedMemberId: "",
      id: "3",
      isAvailable: true,
      title: "React Development in 2021",
    },
  ];
  const handleTabRowClick = (id) => {
  
    console.log(id);

}
  return (
    <FluidContainer>
      <Table data={catalog} handleRowClick={handleTabRowClick} instructions="Click row to view Book" />
    </FluidContainer>
  );
};
export default Books;
