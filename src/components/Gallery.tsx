import Profile from "./Profile";

export default function Gallery() {
  return (
    <section>
      <h2>There some Profiles</h2>
      <div className="flex flex-row">
        <Profile />
        <Profile />
        <Profile />
      </div>
    </section>
  );
}