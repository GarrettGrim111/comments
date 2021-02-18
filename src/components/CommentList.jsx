import React, { useState } from "react";
import styled from "styled-components";

function CommentList({ comments }) {
  const [total, setTotal] = useState(2);

  const sortedComments = comments
    .sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0))
    .reverse();

  return (
    <Wrapper>
      {sortedComments
        .filter((comment, index) => index < total)
        .map(({ id, author, text, date }) => {
          const stringDate = new Date(date);

          return (
            <Comment key={id}>
              <Holder>
                <Author> {author} </Author>
                <Time>{stringDate.toLocaleString("cs-CZ")}</Time>
              </Holder>
              <Text>{text}</Text>
            </Comment>
          );
        })}

      {comments.length > total && (
        <Button type="button" onClick={() => setTotal(total + 2)}>
          Load more
        </Button>
      )}
    </Wrapper>
  );
}

export default CommentList;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Holder = styled.div`
  display: flex;
`;
const Comment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  width: 300px;
  height: auto;
  text-align: center;
  border: 1px black solid;
  background-color: lightgray;
  padding: 50px;
`;
const Text = styled.div`
  margin-top: 10px;
`;

const Time = styled.div`
  margin-left: 10px;
`;
const Author = styled.span`
  font-size: 16px;
  font-weight: bold;
  width: 100px;
`;
const Button = styled.button`
  padding: 5px;
  font-size: 16px;
  font-weight: bold;
`;
