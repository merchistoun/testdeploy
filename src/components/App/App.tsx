import { useTranslate } from "../../localization/useTranslate";
import "./App.css";

const App = () => {
  const { translate } = useTranslate();
  return <h1>{translate("test")}</h1>;
};

export default App;
