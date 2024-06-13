export interface blog {
  id: number;
  author: string;
  imgurl: string;
  heading: string;
  description: string;
  content: string;
  tag: string;
  created_at: string;
}

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  const day = String(date.getDate()).padStart(2, "0");
  return `${day} ${month} ${year}`;
};

export const calulateTime = (content: string): number => {
  const array = content.trim().split(/\s+/);
  return Math.ceil(array.length / 100);
};
