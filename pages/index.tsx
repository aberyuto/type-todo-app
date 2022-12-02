import { ChangeEvent, useState } from "react";
import Validate from "../src/Validate/Validate";
import { useRouter } from "next/router";
import { Button } from "@mantine/core";

export type Initial = {
  username: string;
  mailAddres: string;
  password: string;
};

function Login() {
  const initialValues = { username: "", mailAddres: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialValues);
  const router = useRouter();

  function handleChange(props: ChangeEvent<HTMLInputElement>) {
    const { name, value } = props.target;
    setFormValues({ ...formValues, [name]: value });
  }

  function handleClick() {
    const { isError, ...error } = Validate(formValues);

    // errorがあったら
    if (isError) {
      setFormErrors(error);
    } else {
      router.push({ pathname: "/todo" });
    }
  }

  return (
    <>
      <form>
        <h1>ログインフォーム</h1>
        <hr />
        <div>
          <div>
            <label>ユーザー名</label>
            <input
              type="text"
              placeholder="ユーザー名"
              name="username"
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
          <p style={{ color: "red" }}>{formErrors.username}</p>
          <div className="formField">
            <label>メールアドレス</label>
            <input
              type="text"
              placeholder="メールアドレス"
              name="mailAddres"
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
          <p style={{ color: "red" }}>{formErrors.mailAddres}</p>
          <div className="formField">
            <label>パスワード</label>
            <input
              type="text"
              placeholder="パスワード"
              name="password"
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
          <p style={{ color: "red" }}>{formErrors.password}</p>
        </div>
        <Button
          color="lime"
          radius="md"
          size="md"
          onClick={() => handleClick()}
        >
          ログイン
        </Button>
      </form>
    </>
  );
}

export default Login;
