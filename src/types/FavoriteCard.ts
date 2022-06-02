export interface ICard {
  id: number;
  user_id: string;
  image_id: string;
  sub_id: null;
  created_at: string;
  image: {
    id: string;
    url: string;
  };
}
