import BlogPost, { metadata } from "@/app/markdown/page.md";

export default function Page() {
  return (
    <>
      <div>Title: {metadata.title}</div>
      <div>Snippet: {metadata.snippet}</div>
      <div>Date: {metadata.date}</div>
      <BlogPost />
    </>
  );
}
