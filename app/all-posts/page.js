import dynamic from "next/dynamic";
import { db } from "@/app/firebase";
import { collection, getDocs } from "firebase/firestore";

export const metadata = {
  title: "Travel Blog Next - Posts",
  description: "On this page you can check your awsome added posts.",
};

const AllPostsComponent = dynamic(() =>
  import("../components/all-posts/all-posts")
);

const LoadComponent = dynamic(() => import("../components/load/load"));

async function getAllPosts() {
  let allPosts = [];
  await getDocs(collection(db, "posts"))
    .then((res) => {
      res.forEach((doc) => {
        allPosts.push(doc.data().title);
      });
    })
    .catch((err) => {
      console.log(err);
    });
  return allPosts;
}

export default async function AllPosts() {
  const allPosts = await getAllPosts();
  return (
    <div>
      {allPosts ? <AllPostsComponent allPosts={allPosts} /> : <LoadComponent />}
    </div>
  );
}
