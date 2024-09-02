const link = "https://picsum.photos/v2/list";

fetch(link)
  .then((response: Response) => {
    if (!response.ok) {
      console.error("Response doesn't work");
    }
    return response.json();
  })
  .then((photos) => {
    console.log(photos);
  })
  .catch((error: Error) => {
    console.error(error);
  });
