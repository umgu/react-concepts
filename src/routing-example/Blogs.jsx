import React, { Fragment } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const blogs = [
  { id: 1, title: "title-1", description: "description-1" },
  { id: 2, title: "title-2", description: "description-2" },
  { id: 3, title: "title-3", description: "description-3" },
];
const Blogs = () => {
    const navigate = useNavigate();

    const clickHandler = (title)=> {
        navigate('/blog', {state:{title: title}})
    }

  return (
    <div>
      {blogs.map((blog, index) => {
        return (
            <Fragment key={index}>
                <h1>{blog.title}</h1>
                <p>{blog.description}</p>
            </Fragment>
        //   <Link to={`/blogs/?page=${index}`}>
            // <div style={{ border: "1px solid black", margin: "4px" }} onClick={() => clickHandler(blog.title)}>
            //   <h1>{blog.title}</h1>
            //   <p>{blog.description}</p>
            // </div>
        //   </Link>
        );
      })}
    </div>
  );
};

export default Blogs;
