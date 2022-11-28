import { Initial } from "../../pages/index";

export default function Validate(
  props: Initial
): Initial & { isError: boolean } {
  let isError = false;
  const errors: Initial = { username: "", mailAddres: "", password: "" };
  //メールアドレスの正規表現
  const regex =
    /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
  if (!props.username) {
    isError = true;
    errors.username = "ユーザ名を入力してください";
  }
  if (!props.mailAddres) {
    isError = true;
    errors.mailAddres = "メールアドレスを入力してください";
  } else if (!regex.test(props.mailAddres)) {
    isError = true;
    errors.mailAddres = "正しいメールアドレスを入力してください";
  }

  if (!props.password) {
    isError = true;
    errors.password = "パスワードを入力してください";
  } else if (props.password.length < 4) {
    isError = true;
    errors.password = "4文字以上15文字以下のパスワードを入力してください";
  } else if (props.password.length > 15) {
    isError = true;
    errors.password = "4文字以上15文字以下のパスワードを入力してください";
  }

  return { ...errors, isError };
}
