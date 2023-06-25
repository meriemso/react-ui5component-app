
import { Avatar, ShellBar, ShellBarItem } from "@ui5/webcomponents-react";
import addIcon from "@ui5/webcomponents-icons/dist/add.js";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./Home";
import { Detail } from "./Detail";
import { useNavigate } from "react-router-dom";
function MyApp() {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("./");
  };
  return (
    <><ShellBar
      logo={<img src="reactLogo.png" />}
      onLogoClick={handleLogoClick}
      profile={<Avatar>
        <img src="profilePictureExample.png" />
      </Avatar>}
      primaryTitle="My App"
    >
      <ShellBarItem icon={addIcon} text="Add" />
    </ShellBar><Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes></>
  );
}
export default MyApp;