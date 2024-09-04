import React, { useState, } from "react";
import app from "../firebaseConfig"
import { getDatabase, ref, set, push } from "firebase/database";

function Write() {

  let [nameValue, setNameValue] = useState("");
  let [gwGamePreference, setGWGamePreference] = useState("");

  const saveData = async () => {
    const db = getDatabase(app)
    const newDocRef = push(ref(db, "data/personal-gw-preferences"))
    set(newDocRef, {
      memberName: nameValue,
      memeberGamePreference: gwGamePreference
    }).then( () => {
      alert("data saved successfully")
    }).catch((error) => {
      alert("error: ", error.message)
    })

  }


  return (
    <div>
      <input type='text' value={nameValue} onChange={(e) => setNameValue(e.target.value)} />
      <select value={gwGamePreference} onChange={(e) => setGWGamePreference(e.target.value)}>
        <option value="aos"> Age of Sigmar 🦁</option>
        <option value="40k"> Warhammer 40,000 🚀</option>
        <option value="warcry"> Warcry ⛏️</option>
        <option value="kt"> Kill Team 🔫 </option>
        <option value="30k"> Horus Heresy 👨‍🚀</option>
        <option value="underworlds"> Underworlds 🧟‍♂️</option>
      </select>
      <button onClick={saveData}>Save Submission in Firebase!</button>
    </div>
  )
}

export default Write;