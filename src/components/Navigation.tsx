import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import List from "@mui/material/List";
import ListIcon from "@mui/icons-material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { LanguageSelector } from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "../hooks/useWindowSize";

const drawerWidth = 240;

function Navigation({ parentToChild, modeChange }: any) {
  const { t } = useTranslation();
  const { mode } = parentToChild;
  const { windowWidth } = useWindowSize();

  const navItems = [
    [t("nav-expertise"), "expertise"],
    [t("nav-history"), "history"],
    [t("nav-projects"), "projects"],
    //  ['Contact', 'contact']
  ];

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (windowWidth > 580) {
      setMobileOpen(false);
    }
  }, [windowWidth]);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        const scrolled = window.scrollY > navbar.clientHeight;
        setScrolled(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (section: string) => {
    console.log(section);
    const expertiseElement = document.getElementById(section);
    if (expertiseElement) {
      expertiseElement.scrollIntoView({ behavior: "smooth" });
      console.log("Scrolling to:", expertiseElement); // Debugging: Ensure the element is found
    } else {
      console.error('Element with id "expertise" not found'); // Debugging: Log error if element is not found
    }
  };

  const drawer = (
    <Box
      className="navigation-bar-responsive"
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <p className="mobile-menu-top">
        <ListIcon />
        Menu
      </p>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => scrollToSection(item[1])}
            >
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        id="navigation"
        className={`navbar-fixed-top${scrolled ? " scrolled" : ""}`}
      >
        <Toolbar className="navigation-bar flex justify-center">
          <div className="w-full max-w-[1500px] flex justify-between">
            <div className="flex grow items-center gap-5 justify-between sm:justify-start">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              {mode === "dark" ? (
                <LightModeIcon onClick={() => modeChange()} />
              ) : (
                <DarkModeIcon onClick={() => modeChange()} />
              )}
              <LanguageSelector />
            </div>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item[0]}
                  onClick={() => scrollToSection(item[1])}
                  sx={{ color: "#fff" }}
                >
                  {item[0]}
                </Button>
              ))}
            </Box>
          </div>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;