import { Link } from "react-router-dom";
import Gallery from "../components/Gallery";
import CheckList from "../components/CheckList";

export default function HomePage() {
  return (
    <div>
      <h2>Home Page</h2>
      <Gallery />
      <CheckList />

      <Link to="/Profiles">Profiles</Link>
    </div>
  );
}