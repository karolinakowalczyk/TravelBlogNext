import "./globals.css";
import dynamic from "next/dynamic";

const Home = dynamic(() => import("./components/home/home"));

export const metadata = {
  title: "Travel Blog Next - 360 Travel Inspirations",
  description:
    "Discover the most interesting corners of the world on Travel Blog. Where are the cheap flights now, and where are the most beutiful views?",
};

export default function App() {
  return <Home />;
}
