

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();



    const formData = new FormData();
    formData.append("name", name);
    formData.append("age", age);
    formData.append("phone", phone);
    formData.append("profilePicture", profilePicture);
    axios
      .post("http://localhost:4000/student/new", 
        formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
      })
      .then((result) => {
       
        if (result.status === 201 && result.statusText === "Created")
          navigate("/");
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="htmlForm-group">
          <label htmlFor="exampleInputEmail1">Email address</label>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="htmlForm-control"
            id="exampleInputName"
            aria-describedby="NameHelp"
            placeholder="Enter name"
          />
        </div>
        <div className="htmlForm-group">
          <label htmlFor="exampleInputAge">Age</label>
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            type="text"
            className="htmlForm-control"
            id="exampleInputAge"
            placeholder="Age"
          />
        </div>
        <div className="htmlForm-group">
          <label htmlFor="exampleInputPhone">Phone</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            className="htmlForm-control"
            id="exampleInputPhone"
            placeholder="Phone"
          />
        </div>
        <div className="htmlForm-group">
          <label htmlFor="exampleInputProfilePicture">Profile Picture</label>
          <input
            onChange={(e) => setProfilePicture(e.target.files[0])}
            type="file"
            className="htmlForm-control-file"
            id="exampleInputProfilePicture"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default App;