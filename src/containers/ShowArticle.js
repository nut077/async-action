import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadArticle } from "../actions";
import TopBarProgress from "react-topbar-progress-indicator";
import { Comment, Button } from "../components";
import "./ShowArticle.scss";

const ShowArticle = ({ article, loadArticle, isLoggedIn }) => {
  useEffect(() => {
    loadArticle();
  }, [loadArticle]);

  if (article) {
    console.log("article", article);
    return (
      <div>
        <h2>{article.title}</h2>
        <p>{article.content}</p>
        <Button to={`/articles/${article.id}/edit`}>Edit</Button>
        <Button>Delete</Button>
        <hr />
        {article.comments &&
          article.comments.map((comment, index) => (
            <Comment key={`comment${index}`} {...comment} />
          ))}
      </div>
    );
  } else {
    return <TopBarProgress />;
  }
};

export default connect(
  ({ articles: { items }, auth }, { match: { params } }) => ({
    article: items.find(article => article.id === params.id),
    isLoggedIn: !!auth.token
  }),
  (dispatch, { match: { params } }) => ({
    loadArticle() {
      dispatch(loadArticle(params.id));
    }
  })
)(ShowArticle);
