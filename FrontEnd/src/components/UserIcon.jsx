import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

function UserIcon() {
  return (
    <>
      <Link to="/Login">
        <AccountCircleIcon
        sx={{
          color:"primary",
          cursor: "pointer",
        }}
        />
      </Link>
    </>
  );
}

export default UserIcon;
