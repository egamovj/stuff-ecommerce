import { useSelector } from "react-redux";
import UserSignupForm from "./UserSignupForm";

const UsersForm = () => {
  const { showForm } = useSelector(({ user }) => user);
  return showForm ? <UserSignupForm /> : <></>;
};

export default UsersForm;
