import { NavLink, Outlet } from "react-router-dom";
// changed link to navink to get className active
// outlet is for render the chil router

export default function ProfilesPage() {
  const profiles = ['Active', 'Remote', 'Model', 'Details', 'About'];

  return (
    <div className="flex flex-row gap-2">
       <div className="flex flex-col gap-2">
        {profiles.map((profile) => (
          <NavLink 
            key={profile} 
            to={`/profiles/${profile}`}
            className={({ isActive }) => {
              return isActive ? 'text-sky-500' : '';
            }} 
          >
            {profile}
          </NavLink>
        ))}
      </div>
      <Outlet /> 
    </div>
  );
  
}
