import { Paper } from "@mui/material";
import "./ProfileMenu.css";

export default function ProfileMenu() {
  return (
    <div className="ProfileMenu">
      <Paper elevation={3} className="PaperMenu">
        <img src="https://avatars.githubusercontent.com/u/50688059?v=4" />
        <a>Nome Nome Nome</a>
        <a>Perfil</a>
        <a>Curtidas</a>
      </Paper>
    </div>
  );
}
