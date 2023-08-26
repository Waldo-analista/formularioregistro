import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { useState } from "react";

import AccountCircle from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import EmailIcon from "@mui/icons-material/Email";

const FormularioSignUp = ({ handleSubmit }) => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [promociones, setPromociones] = useState(true);
  const [novedades, setNovedades] = useState(false);
  const [errors, setErrors] = useState({
    name: { error: false, helperText: "" },
    lastname: { error: false, helperText: "" },
    email: { error: false, helperText: "" },
  });

  const validarNombre = (name) => {
    if (name.length < 3) {
      setErrors({
        ...errors,
        name: { error: true, helperText: "Deben ser al menos 3 caracteres" },
      });
    } else {
      setErrors({
        ...errors,
        name: { error: false, helperText: "" },
      });
    }
  };

  const validarLastName = (lastname) => {
    if (lastname.length < 3) {
      setErrors({
        ...errors,
        lastname: {
          error: true,
          helperText: "Deben ser al menos 3 caracteres",
        },
      });
    } else {
      setErrors({
        ...errors,
        lastname: { error: false, helperText: "" },
      });
    }
  };

  const validarEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailRegex.test(email)) {
      setErrors({
        ...errors,
        email: { error: false, helperText: "" },
      });
    } else {
      setErrors({
        ...errors,
        email: {
          error: true,
          helperText: "Debes ingresar un mail en formato email: xxxx@xxxx.xxx ",
        },
      });
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit({ name, lastname, email, promociones, novedades });
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            error={errors.name.error}
            helperText={errors.name.error ? errors.name.helperText : <></>}
            id="nombre"
            label="Nombre"
            variant="outlined"
            required={true}
            fullWidth={true}
            margin="normal"
            onChange={(e) => setName(e.target.value)}
            onBlur={(e) => validarNombre(e.target.value)}
            value={name}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            error={errors.lastname.error}
            helperText={
              errors.lastname.error ? errors.lastname.helperText : <></>
            }
            id="apellidos"
            label="Apellidos"
            variant="outlined"
            required={true}
            fullWidth={true}
            margin="normal"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            onBlur={(e) => validarLastName(e.target.value)}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            error={errors.email.error}
            helperText={errors.email.error ? errors.email.helperText : <></>}
            id="text"
            label="Email"
            variant="outlined"
            type="email"
            required={true}
            fullWidth={true}
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={(e) => validarEmail(e.target.value)}
          />
        </Box>

        <FormGroup>
          <div>
            <FormControlLabel
              control={
                <Switch
                  checked={promociones}
                  onChange={(e) => {
                    setPromociones(e.target.checked);
                  }}
                />
              }
              label="Promociones"
            />
            <FormControlLabel
              control={
                <Switch
                  color="secondary"
                  checked={novedades}
                  onChange={(e) => {
                    setNovedades(e.target.checked);
                  }}
                />
              }
              label="Novedades"
            />
          </div>
        </FormGroup>

        <Button variant="contained" type="submit">
          Registrarse
        </Button>
      </form>
    </>
  );
};

export default FormularioSignUp;
