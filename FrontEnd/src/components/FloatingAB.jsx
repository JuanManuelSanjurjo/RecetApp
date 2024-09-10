import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const actionsHome = [
  { icon: <AddIcon />, name: "Crear", path: "/editar-receta" },
];

const actionsDetalleReceta = [
  { icon: <EditIcon />, name: "Editar", path: "/detalle-receta" },
];

export default function FloatingAB() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const handleActionClick = (path) => {
    navigate(path);
    handleClose();
  };

  // Dependiendo de la ruta, selecciona las acciones a mostrar
  // TODO: que el speedDial solo se muestre si la receta es del usuario y si esta logueado!!!!!

  const location = useLocation();
  let actions = [];
  // Verificamos si estamos en la página de inicio
  if (location.pathname === "/") {
    actions = actionsHome;
  }
  // Verificamos si estamos en la página de detalle de receta (puede incluir un ID en la URL)
  else if (location.pathname.includes("/detalle-receta")) {
    actions = actionsDetalleReceta;
  }

  return (
    <Box
      sx={{
        height: 330,
        transform: "translateZ(0px)",
        flexGrow: 1,
        m: 1,
        position: "fixed",
        bottom: 16,
        right: 16,
        display: "flex",
        gap: 2,
        zIndex: 1,
      }}
    >
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => handleActionClick(action.path)}
          ></SpeedDialAction>
        ))}
      </SpeedDial>
    </Box>
  );
}
