import BlogPost, { metadata } from "@/content/product.md";

export default function Page() {
  return (
    <>
      <div>Title: {metadata.title}</div>
      <div>Page: {metadata.page}</div>
      <div>File: {metadata.file}</div>
      <div>Date: {metadata.date}</div>
    </>
  );
}
