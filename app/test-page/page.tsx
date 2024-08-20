import BlogPost, { metadata } from "@/content/home.md";

export default function Page() {
  return (
    <>
      <div>Title: {metadata.title}</div>
      <div>Date: {metadata.date}</div>
    </>
  );
}
