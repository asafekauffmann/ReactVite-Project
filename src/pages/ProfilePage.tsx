import { useParams } from "react-router-dom" // Start for use the router to id

export default function ProfilePage() {
  const params = useParams<{profileId: string}>(); // <{}> Giving a type for useParams Ts  // Get paramters from Profile retuining obj
  // console.log(params);
  return (
    <div>
      <h2>Profile Page {params.profileId}</h2>
      <p>test</p>
    </div>
  );
}