import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const ResetPassword = () => {
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const {id, token} = useParams()

  axios.defaults.withCredentials = true;
  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:4000/resetpassword/${id}/${token}`, { password })
      .then((res) => {
        if (res.data.status === "Success") {
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <h2>Reset Password</h2>
        <label>New Password</label>
        <input
          type="password"
          name="password"
          placeholder="new password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Finish</button>
      </form>
    </div>
  );
};

export default ResetPassword;
