import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/posts/postsSlice";

export default function Posts() {
  const { posts, isLoading, isError, error } = useSelector(
    (state) => state.posts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // deciede render
  let content;

  if (isLoading) {
    content = <p>Posts Loading........</p>;
  }

  if (isError && !isLoading) {
    content = <p>{error}</p>;
  }

  if (!isError && !isLoading && posts.length === 0) {
    content = <p>No posts found</p>;
  }

  if (!isError && !isLoading && posts.length > 0) {
    content = (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    );
  }

  return <div>{content}</div>;
}
