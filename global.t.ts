declare global {
  type Game = {
    id: number;
    cover: Cover;
    name: string;
    total_rating: number;
    total_rating_count: number;
    videos: number[];
  };

  type Cover = {
    id: number;
    height: number;
    image_id: string;
    url: string;
    width: number;
  };
}
export { Game };
