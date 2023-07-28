import dynamic from "next/dynamic";

export const metadata = {
  title: "Travel Blog Next - Posts",
  description: "On this page you can check your awsome added posts.",
};

const MyPostsComponent = dynamic(() =>
  import("../components/my-posts/my-posts")
);

export default function MyPosts() {
  return <MyPostsComponent />;
}
