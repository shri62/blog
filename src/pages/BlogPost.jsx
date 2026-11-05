
import { useParams, Link } from "react-router-dom";
import posts from "../data/post";

// Display one blog post
function BlogPost() {
  // Get the slug from the URL
  const { slug } = useParams();

  // Find the matching blog post
  const post = posts.find((post) => post.slug === slug);

  // Show message if post does not exist
  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>

      // Go back to blog
      <Link to="/blog">Back to Blog</Link>
    </div>
  );
}

export default BlogPost;
