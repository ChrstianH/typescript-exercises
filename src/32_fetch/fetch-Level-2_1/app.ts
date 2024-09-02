const link = "https://picsum.photos/v2/list";
type Photo = {
  id: string;
  author: string;
  url: string;
  download_url: string;
};

fetch(link)
  .then((response: Response) => {
    if (!response.ok) {
      console.error("Response doesn't work");
    }
    return response.json();
  })
  .then((photos: Photo[]) => {
    console.log(photos);
    const photosContainer = document.getElementById("photos") as HTMLDivElement;
    photos.forEach((photo: Photo) => {
      const figureElement = document.createElement("figure");
      const imgElement = document.createElement("img") as HTMLImageElement;
      imgElement.src = photo.download_url;
      const figCaptionElement = document.createElement("figcaption");
      figCaptionElement.textContent = photo.author;
      figureElement.appendChild(imgElement);
      figureElement.appendChild(figCaptionElement);
      photosContainer.appendChild(figureElement);
    });
  })
  .catch((error: Error) => {
    console.error(error);
  });
