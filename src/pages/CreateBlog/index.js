import React from "react";
import { Input, Button, Upload, TextArea, Gap, Link } from "components";
import "./index.scss";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
  const history = useHistory();
  return (
    <div className="blog-post">
      <p className="title">Content Create blog</p>
      <Input label="Post Title" />
      <Upload />
      <TextArea />
      <Gap height={20} />
      <div className="btn-create">
        <Link title="Go Back" onClick={() => history.push("/")} />
        <div className="button-action">
          <Button title="Upload" />
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
