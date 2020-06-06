import React, { useState } from "react";
import { Button, TextField, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function Landing() {
  const [isEmailEntered, emailSend] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="App">
      <div className="Login">
        <Button
          variant="outlined"
          component={RouterLink}
          to="/login"
          color="primary"
        >
          Войти
        </Button>
      </div>
      <header className="App-header">
        <h1 className="Title">
          <span className="Sliv">Слив</span>&nbsp;<span>ММР Dota 2</span>
          <span className="Alpha">α version</span>
        </h1>
        <div className="Content">
          <p>
            Дебуст аккаунтов 200 руб за каждые 1000 MMR
            <br />
            Для тех, кто хочет играть под пиво и чипсы
            <br />
            Продажа и покупка аккаунтов с низким MMR
          </p>
          {!isEmailEntered && (
            <>
              <p className="Pre-reg">
                Пре-регистрация для участия в бета и альфа тесте
              </p>
              <div className="Send">
                <div className="Email">
                  <TextField
                    id="email"
                    label="Email"
                    variant="filled"
                    color="secondary"
                    fullWidth
                    onChange={({ target: { value } }) => setEmail(value)}
                  />
                </div>
                <Button
                  className="SendBtn"
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    emailSend(true);
                  }}
                  disabled={!validateEmail(email)}
                >
                  Отправить
                </Button>
              </div>
              <div className="Privacy">
                Нажимая отправить вы соглашаетесь с{" "}
                <Link href="/privacy.md" color="textSecondary" target="_blank">
                  политикой обработки персональных данных
                </Link>
              </div>
            </>
          )}
          {isEmailEntered && (
            <>
              Спасибо за проявленный интерес
              <br />
              Анонс открытия будет отправлен на email
              <br />
              <span className="Email-finish">{email}</span>
            </>
          )}
        </div>
      </header>
    </div>
  );
}
