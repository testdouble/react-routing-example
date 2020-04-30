import React from "react";
import { useHistory } from "react-router-dom";
import { useAppState, useAppDispatch } from "../store";

export default function EditProfile() {
  const history = useHistory();
  const { profile } = useAppState();
  const dispatch = useAppDispatch();
  const [nameInput, setNameInput] = React.useState(profile.name || "");
  const [successfulSave, setSuccessfulSave] = React.useState(false);

  const handleCancel = () => {
    history.goBack();
  };

  const handleSave = () => {
    dispatch(["UPDATE_PROFILE", nameInput]);
    setSuccessfulSave(true);
    setTimeout(() => {
      history.push("/profile");
    }, 800);
  };

  return (
    <div className="p-4">
      <div className="mt-4 text-4xl">Editing Profile</div>
      <div className="mt-4">
        <label>
          Your Name:
          <input
            type="text"
            value={nameInput}
            onChange={(evt) => setNameInput(evt.target.value)}
            className="ml-2 p-2 rounded border border-gray-200"
          />
          {successfulSave && (
            <span className="ml-4 text-green-500 text-lg">Saved!</span>
          )}
        </label>
        <div className="mt-4">
          <button
            onClick={handleCancel}
            className="font-semibold uppercase bg-red-500 text-white px-4 py-3 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="font-semibold uppercase ml-4 bg-blue-600 text-white px-4 py-3 rounded"
          >
            Save and Exit
          </button>
        </div>
      </div>
    </div>
  );
}
