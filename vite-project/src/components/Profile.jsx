import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import "./style.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      variant="contained"
      size="large"
      onClick={loginWithRedirect}
    >
      Login
    </Button>
  );
};

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button
      variant="contained"
      size="large"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </Button>
  );
};

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div className="auth0style">
      {isAuthenticated ? (
        <>
          <h2>Hi, {user.name}!</h2>
          <LogoutButton />
        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
};



export default Profile;
