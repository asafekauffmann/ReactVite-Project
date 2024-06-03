import { NavLink, Outlet } from "react-router-dom";
// changed link to navink to get className active
// outlet is for render the chil router

export default function ProfilesPage() {
  const profiles = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-row gap-2">
       <div className="flex flex-col gap-2">
        {profiles.map((profile) => (
          <NavLink 
            key={profile} 
            to={`/profiles/${profile}`}
            className={({ isActive }) => {
              return isActive ? 'text-primary-500' : '';
            }} 
          >
            Profile {profile}
          </NavLink>
        ))}
      </div>
      <Outlet /> 
    </div>
  );
  
}
