import TextUpdater from "./components/TextUpdater";
import FormSubmit from "./components/FormSubmit";
import UserCard from "./components/UserCard";
import CustomButton from "./components/CustomButton";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="p-8 space-y-6">
      <TextUpdater />
      <FormSubmit />
      <UserCard name="John Doe" email="john@example.com" />
      <CustomButton />
      <LoginForm />
    </div>
  );
}

export default App;
