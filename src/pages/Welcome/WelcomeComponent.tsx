import WelcomeButton from "../../components/buttons/WelcomeButton/WelcomeButton";
import "./styles.css";

export default function WelcomeComponent() {
  return (
    <div className="welcomeComponent">
      <span>Bem-vindo!</span>
      <WelcomeButton />
    </div>
  );
}
