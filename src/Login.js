import React, { useState } from "react";
import { TextField, Button, Typography } from "@material-ui/core";

export function Login() {
  const [error, setError] = useState(false);

  return (
    <div className="LoginPage">
      <TextField
        error={error}
        variant="filled"
        color="primary"
        id="login"
        label="Логин"
      />
      <br />
      <TextField
        variant="filled"
        color="primary"
        id="password"
        label="Пароль"
        type="password"
        error={error}
      />
      {error && (
        <>
          <br />
          <Typography variant="caption" color="primary">
            Неправильный логин или пароль
          </Typography>
        </>
      )}
      <br />
      <Button
        variant="outlined"
        color="primary"
        className="LoginPageLogin"
        onClick={() => setError(true)}
      >
        Войти
      </Button>
      <div className="Version">v0.23.1</div>
    </div>
  );
}
