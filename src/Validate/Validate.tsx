import { Initial } from "../../pages/index";

export default function Validate(props: Initial) {
  const errors: Initial = { username: "", mailAddres: "", password: "" };
  //メールアドレスの正規表現
  const regex =
    /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
  if (!props.username) {
    errors.username = "ユーザ名を入力してください";
  }
  if (!props.mailAddres) {
    errors.mailAddres = "メールアドレスを入力してください";
  } else if (!regex.test(props.mailAddres)) {
    errors.mailAddres = "正しいメールアドレスを入力してください";
  }

  if (!props.password) {
    errors.password = "ユーザ名を入力してください";
  } else if (props.password.length < 4) {
    errors.password = "4文字以上15文字以下のパスワードを入力してください";
  } else if (props.password.length > 15) {
    errors.password = "4文字以上15文字以下のパスワードを入力してください";
  }

  return errors;
}
