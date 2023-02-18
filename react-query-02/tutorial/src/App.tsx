import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// /posts -> ["posts"]
// /posts/1 -> ["posts", post.id]
// /posts?authorId=1 -> ["posts", { authorId: 1}]
// /posts/2/comments -> ["posts", post.id, "comments"]

const POSTS = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
] as { id: number | string; title: string }[];

function App() {
  console.log(POSTS);

  const queryClient = useQueryClient();

  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: ({ queryKey }) => {
      console.log({ queryKey });

      return wait(1000).then(() => [...POSTS]);
    },
    // queryFn: () => Promise.reject("Error Message"),
  });

  console.log(postsQuery.isFetching);

  const newPostMutation = useMutation({
    mutationFn: (title: string) =>
      wait(1000).then(() =>
        POSTS.push({
          id: crypto.randomUUID(),
          title,
        })
      ),
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  if (postsQuery.isLoading) return <h1>Loading...</h1>;
  if (postsQuery.error) return <pre>{JSON.stringify(postsQuery.error)}</pre>;

  return (
    <div>
      {postsQuery.data?.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
      <button
        disabled={newPostMutation.isLoading}
        onClick={() => newPostMutation.mutate("New Post")}
      >
        Add New
      </button>
    </div>
  );
}

function wait(duration: number) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default App;
