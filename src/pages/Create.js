import react from "react";
import Card from "../components/base/Card";
import TextInput from "../components/base/TextInput";
import { Colors } from "../constants/Colors";
const Create = () => {


    return (
        <div>
            Create Page
            <Card blurColor={Colors.buttons.succes} />
            <TextInput />
        </div>
    );
}

export default Create;