
// Import blog posts
import posts from "../data/post";
import { Link } from "react-router-dom";

// Display all blog posts
function Blog() {
  return (
    <div>
      <h1>My Blog</h1>
      <h2>All Blog Posts</h2>

      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>

          // Open the individual blog post
          <Link to={`/blog/${post.slug}`}>
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Blog;

