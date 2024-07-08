import React from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/slices/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    const dataLogin = {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImV4cCI6MzAwMH0.eyJuYW1lIjoiQmFnYXMgUHJhdGFtYSIsImVtYWlsIjoiYnByYXRhbWEzNjlAZ21haWwuY29tIiwidXJsX2ltZyI6Imh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA3MDAzMjExMTY5LTBhMWRkNzIyOGYyZD9peGxpYj1yYi00LjAuMyZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9Njg3JnE9ODAiLCJrZXlsb2dpbjE5OTciOnRydWV9.-en2dZr5FqRMLzmaMbeaMCne8BOFEHqZDe-ZbejeK6o",
    };
    dispatch(loginUser(dataLogin));
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
