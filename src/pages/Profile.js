import React from "react";
import { SuccessButton } from "../components";
import { useHistory } from "react-router-dom";

export default function ProfilePage() {
  const name = "bob";
  const history = useHistory();
  return (
    <div className="p-4 text-gray-800">
      <h1 className="text-2xl ">Profile</h1>
      <div className="text-lg">Your Name: {name}</div>
      <div className="mt-4">
        <SuccessButton onClick={() => history.push("/profile/edit")}>
          Edit
        </SuccessButton>
      </div>
    </div>
  );
}
