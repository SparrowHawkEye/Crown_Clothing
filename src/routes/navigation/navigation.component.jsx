import { Outlet } from "react-router-dom";
// import { Fragment } from "react";
const Navigation = () => {
  return (
    <>
    <div className="navigation">This is navigation</div>
      <Outlet />
    </>
  );
};

export default Navigation;
