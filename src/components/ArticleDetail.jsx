import React from "react";
import styled from "styled-components";

import cover from "../images/cover.jpg";

function ArticleDetail({ article }) {
  return (
    <Wrapper>
      <Image src={cover} alt="" />
      <Article key={article.id}>
        <Author>{article.author} </Author>
        <Text>{article.text} </Text>
      </Article>
    </Wrapper>
  );
}

export default ArticleDetail;

const Wrapper = styled.div``;
const Image = styled.img`
  width: 800px;
  height: 600px;
  object-fit: cover;
  border: 2px black solid;
`;

const Article = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;
const Author = styled.span`
  font-size: 40px;
  margin: 20px 0;
`;
const Text = styled.div`
  width: 450px;
  margin-bottom: 30px;
`;
