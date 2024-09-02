const link1 = "https://jsonplaceholder.typicode.com/posts/1/comments";

type Comment = { postId: number; id: number; name: string; email: string };

fetch(link1)
  .then((response: Response) => {
    if (!response.ok) {
      console.error("Response doesn't work");
    }
    return response.json();
  })
  .then((comments: Comment[]) => {
    console.log(comments.map((comment: Comment) => comment.email));
  })
  .catch((error: Error) => {
    console.error(error);
  });

const link2 = "https://jsonplaceholder.typicode.com/posts";

type Post = { userId: number; id: number; title: string; body: string };

fetch(link2)
  .then((response: Response) => {
    if (!response.ok) {
      console.error("Response doesn't work");
    }
    return response.json();
  })
  .then((posts: Post[]) => {
    console.log(posts);
    const ids: number[] = posts.map((post: Post) => post.id);
    console.log(Math.max(...ids));
    const titles: string[] = posts.map((post: Post) => post.title);
    console.log(getShortestTitle(titles));
    const bodies: string[] = posts.map((post: Post) => post.body);
    console.log(getLongestBody(bodies));
  })
  .catch((error: Error) => {
    console.error(error);
  });

const getShortestTitle = (titles: string[]): string => {
  let shortestString = "";
  titles.forEach((title: string) => {
    if (title.length < shortestString.length || shortestString.length === 0) {
      shortestString = title;
    }
  });
  return shortestString;
};

const getLongestBody = (bodies: string[]): string => {
  let shortestString = "";
  bodies.forEach((body: string) => {
    if (body.length > shortestString.length) {
      shortestString = body;
    }
  });
  return shortestString;
};
