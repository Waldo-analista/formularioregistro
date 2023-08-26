import "./App.css";
import FormularioSignUp from "./Components/FormularioSignUp";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import swal from "sweetalert";

function App() {
  const handleSubmit = (objeto) => {
    swal(
      "¡ Felicidades !",
      "El registro ha sido realizado de manera exitosa",
      "success"
    );
  };
  return (
    <div
      style={{
        paddingTop: "1rem",
        paddingBottom: "1rem",
        backgroundColor: "#eaffff",
      }}
    >
      <Container component="section" maxWidth="sm">
        <Typography variant="h3" align="center" gutterBottom>
          Formulario de Registro
        </Typography>
        <FormularioSignUp handleSubmit={handleSubmit} />
      </Container>
    </div>
  );
}

export default App;
