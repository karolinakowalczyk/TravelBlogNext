import dynamic from "next/dynamic";

export const metadata = {
  title: "Travel Blog Flask - Add New Post",
  description:
    "Where did you go last time? Share your travel experience and add new post!",
};

const AddPostComponent = dynamic(() =>
  import("../components/add-post/add-post")
);

export default function AddPost() {
  return <AddPostComponent />;
}
