import React from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';

const Blog = () => {
    // const {blogId} = useParams();
    // console.log(id);
    const data  = useLocation();
    // console.log("##################")
    // const [queryParam] = useSearchParams();
    console.log(data);
  return (
    <div>
      {/* {blogId} */}
    </div>
  )
}

export default Blog;
