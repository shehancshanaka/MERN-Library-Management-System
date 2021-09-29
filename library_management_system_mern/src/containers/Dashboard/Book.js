import React, { useState, useEffect } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import { getBooks } from "../../api/bookAPI";
import {
  Button,
  Container,
  ContainerInline,
  FlexRow,
} from "../../components/commonComponents";
import Spinner from "../../components/Spinner";

const Book = ({ id, handleBackClick }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [book, setBook] = useState(null);

  useEffect(
    () => {
      setIsLoading(true);
      getBooks(id)
        .then((response) => {
          if (!response.error) {
            setBook(response.data);
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    { id }
  );

  return (
    <Container>
      <Button onClick={handleBackClick}>
        <IoReturnUpBack />
      </Button>

      {!isLoading && book !== null ? (
        <FlexRow>
          <ContainerInline>
            <h1>{book.title}</h1>
            <h2>{book.author}</h2>
            <p>ffrfrfkrlfkrrlrkfrkfrlfkrrlg</p>
            {book.isAvalable ? (
              ""
            ) : (
              <>
                <h4>{` Burrowed by: ${book.borrowedMember}`}</h4>
                <h4>{` Burrowed by: ${book.borrowedDate}`}</h4>
              </>
            )}
          </ContainerInline>
        </FlexRow>
      ) : (
        <Spinner />
      )}
    </Container>
  );
};
export default Book;
