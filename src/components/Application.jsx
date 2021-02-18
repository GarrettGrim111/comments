import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleDetail from "./ArticleDetail";
import CommentList from "./CommentList";
import styled from "styled-components";

function Application() {
  const [comments, setComments] = useState([]);
  const [article, setArticle] = useState([]);

  const apiEndPoint =
    "https://run.mocky.io/v3/14510562-f550-46bc-a7cd-8384b6550a94";

  useEffect(() => {
    axios
      .get(apiEndPoint)
      .then(({ data }) => {
        const article = data.filter((article) => article.type === "article");
        const comments = data.filter((article) => article.type === "comments");

        setArticle(article[0]);
        setComments(comments);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(article);

  return (
    <Wrapper>
      <ArticleDetail article={article} />
      <CommentList comments={comments} />
    </Wrapper>
  );
}

export default Application;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
