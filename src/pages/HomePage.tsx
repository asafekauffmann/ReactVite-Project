import { Link } from "react-router-dom";
import Gallery from "../components/Gallery";

export default function HomePage() {
  return (
    <div>
      <h2>Home Page</h2>
      <Gallery />
      <Link to="/Profiles">Profiles</Link>
    </div>
  );
}