import Input from "../components/Input";
import React from "react";
import Swal from "sweetalert2";
import "animate.css";

export default function Home() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [remember, setRemember] = React.useState<any | null>([]);

  const colors = {
    primaryColor: "#BBADFF",
    secondaryColor: "#9FA0FF",
    tertiaryColor: "#8E94F2",
    neutralColor: "#373737",
    fullWhite: "#FFFFFF",
  };


  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (target.checked) {
      setRemember([...remember, target.value] as any | string);
    } else {
      setRemember(remember.filter((c: string) => c !== target.value));
    }
  }

  function checkRemember(rememberValue: string) {
    return remember.includes(rememberValue);
  }

  function handleSubmit(event: Event | React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (username == "" || password == "") {
      Swal.fire({
        title: "Campos Obrigatórios Vazios!",
        text: "Por favor, preencha os campos obrigatórios",
        icon: "error",
        confirmButtonText: "Confirmar",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    } else {
      Swal.fire({
        title: "Cadastro Realizado",
        text: "Parabéns",
        icon: "success",
        confirmButtonText: "Confirmar",
      });
    }
  }

  return (
    <div
      className="flex flex-row justify-center mt-20 w-[900px] items-center my-0 mx-auto"
      style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.11)" }}
    >
      <div className="w-full p-10">
        <div className="flex flex-row items-center justify-between mb-5">
          <h1 className="text-3xl">Sign In</h1>
          <div className="flex flex-row items-center gap-3">
            <img src="/img/facebook-icon.svg" />
            <img src="/img/twitter-icon.svg" />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            id="username"
            labelName="USERNAME"
            value={username}
            setValue={setUsername}
            placeholder="Username"
          />
          <Input
            type="password"
            id="senha"
            labelName="PASSWORD"
            value={password}
            setValue={setPassword}
            placeholder="Password"
          />
          <button
            type="submit"
            className="w-full px-4 py-3 mb-4 font-bold text-center text-white rounded-3xl"
            style={
              { background: `linear-gradient(to right, ${colors.primaryColor}, ${colors.secondaryColor}`,
                
              }
              
          }
          >
            Sign in
          </button>
        </form>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-2">
            <input
              id="remember"
              name="remember"
              type="checkbox"
              value="Remember me"
              checked={checkRemember("Remember me")}
              onChange={handleChange}
              className="w-4 h-4 m-0 bg-white border-2 rounded appearance-none cursor-pointer"
              style={
                remember.length > 0
                  ? {
                      background: colors.primaryColor,
                      borderColor: colors.primaryColor,
                    }
                  : { background: "#ffffff", 
                      borderColor: colors.neutralColor 
                    }
              }
            />
            <label
              htmlFor="remember"
              className="cursor-pointer"
              style={
                remember.length > 0
                  ? { color: colors.primaryColor }
                  : { color: colors.neutralColor }
              }
            >
              Remember me
            </label>
          </div>
          <div>
            <p style={{ color: colors.neutralColor }}>Forgot Password</p>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col items-center self-stretch justify-center w-full gap-3 p-10 text-center"
        style={{
          background: `linear-gradient(to left, ${colors.primaryColor}, ${colors.secondaryColor}`,
        }}
      >
        <h1 className="text-3xl font-bold text-white">Welcome to login</h1>
        <p className="font-bold text-white">Don't have an account?</p>
        <button className="px-6 py-2 mt-4 font-bold text-white border-2 rounded-3xl">
          Sign Up
        </button>
      </div>
    </div>
  );
}
