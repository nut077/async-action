import React, { useReducer } from "react";
import "./ArticleForm.scss";
import { Button } from "./";

const ArticleForm = ({ header, onSubmit }) => {
  const [inputForm, setInputForm] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      title: "",
      excerpt: "",
      content: ""
    }
  );

  const onChange = event => {
    const { name, value } = event.target;
    setInputForm({ [name]: value });
  };

  const submitForm = event => {
    event.preventDefault();
    onSubmit(inputForm);
  };

  return (
    <form>
      <h2 className="title-article-form">{header}</h2>
      <div className="group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={onChange}
          value={inputForm.title}
        />
      </div>
      <div className="group">
        <label htmlFor="excerpt">Excerpt</label>
        <textarea
          rows="3"
          id="excerpt"
          name="excerpt"
          onChange={onChange}
          value={inputForm.excerpt}
        />
      </div>
      <div className="group">
        <label htmlFor="content">Content</label>
        <textarea
          rows="5"
          id="content"
          name="content"
          onChange={onChange}
          value={inputForm.content}
        />
      </div>
      <div className="button-article-form">
        <Button onClick={submitForm}>{header}</Button>
      </div>
    </form>
  );
};

export default ArticleForm;
