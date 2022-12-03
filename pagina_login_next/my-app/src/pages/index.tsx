import Input from "../components/Input";
import React from "react";

export default function Home() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [remember, setRemember] = React.useState<any | null>([]);

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
        <form>
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
        </form>
        <button className="w-full px-4 py-3 text-center bg-gradient-to-r from-[#E46263] to-[#E46181] rounded-3xl text-white font-bold mb-4">
          Sign in
        </button>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-2">
            <input
              id="remember"
              name="remember"
              type="checkbox"
              value="Remember me"
              checked={checkRemember("Remember me")}
              onChange={handleChange}
              className="w-4 h-4 m-0 bg-white border-2 rounded appearance-none checked:bg-[#E46263] border-slate-500 checked:border-[#E46263] cursor-pointer"
            />
            <label
              htmlFor="remember"
              className={
                remember.length > 0
                  ? "text-[#E46263] cursor-pointer"
                  : "text-black cursor-pointer"
              }
            >
              Remember me
            </label>
          </div>
          <div>
            <p>Forgot Password</p>
          </div>
        </div>
      </div>
      <div className="p-10 w-full bg-gradient-to-r from-[#E46263] to-[#E46181] self-stretch text-center flex flex-col items-center justify-center gap-3">
        <h1 className="text-3xl font-bold text-white">Welcome to login</h1>
        <p className="font-bold text-white">Don't have an account?</p>
        <button className="px-6 py-2 mt-4 font-bold text-white border-2 rounded-3xl">
          Sign Up
        </button>
      </div>
    </div>
  );
}
