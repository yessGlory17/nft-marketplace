import react from "react";
import Button from "../components/base/Button";
import Card from "../components/base/Card";
import Image from "../components/base/Image";
import TextInput from "../components/base/TextInput";
import { Colors } from "../constants/Colors";

const Create = () => {
  return (
    <div>
      Create Page
      <Card />
      <TextInput />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Button width="150px" height="30px" textContent="Primary Button" />
      <Button
        width="150px"
        height="30px"
        textContent="Secondary Button"
        color={Colors.buttons.secondary}
      />
      <Button
        width="150px"
        height="30px"
        textContent="Secondary Button"
        color={Colors.buttons.danger}
      />
      <Button
        width="150px"
        height="30px"
        textContent="Secondary Button"
        color={Colors.buttons.succes}
      />
      <Image
        width="300px"
        height="300px"
        src="https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
      />
    </div>
  );
};

export default Create;
