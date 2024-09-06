import MenuIcon from "@mui/icons-material/Menu";
import ContrastIcon from "@mui/icons-material/Contrast";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import UserIcon from "./UserIcon";
import LoginBtn from "./LoginBtn.jsx";
import { useState } from "react";

const menu = ["Home", "Mis recetas", "Favoritos"];

function ResponsiveAppBar({ toggleTheme, theme }) {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //Solo para testear Tooltip
  let user = "";

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <RestaurantMenuIcon
            sx={{ display: { xs: "none", md: "flex", color: "white" }, mr: 1 }}
          />
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              RECETAPP
            </Typography>
          </Link>
          {/* Start Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="white"
            >
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {menu.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* End Mobile Menu */}
          <RestaurantMenuIcon
            sx={{ display: { xs: "flex", md: "none", color: "white" }, mr: 1 }}
          />
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                textDecoration: "none",
                color: "white",
              }}
            >
              RECETAPP
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {menu.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}

            <LoginBtn />
          </Box>

          <Tooltip title={user ? "Ver perfil" : "Iniciar sesión"}>
            <Box sx={{ mx: 1 }}>
              <UserIcon />
            </Box>
          </Tooltip>

          <Box
            onClick={toggleTheme}
            sx={{
              flexGrow: 0,
              margin: 0,
              padding: 0.7,
              borderRadius: "100%",
              backgroundColor: "background.paper",
              cursor: "pointer",
            }}
          >
            {theme === "dark" ? (
              <Brightness6Icon
                sx={{
                  display: "flex",
                  scale: 0.8,
                  alignItems: "center",
                  justifyContent: "center",
                  color: "text.primary",
                }}
              />
            ) : (
              <ContrastIcon
                sx={{
                  display: "flex",
                  scale: 0.8,
                  alignItems: "center",
                  justifyContent: "center",
                  color: "text.primary",
                }}
              />
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
