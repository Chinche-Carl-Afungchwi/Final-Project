// src/pages/Register.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MainLayout from "../layouts/MainLayout";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(
        "https://underbelle-backend.onrender.com/api/auth/register",
        {
          username: form.username,
          email: form.email,
          password: form.password,
        }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/register-success");
    } catch (err: any) {
      const msg = err?.response?.data?.message || "Registration failed";
      setError(msg);
    }
  };

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center mb-10 text-white text-center">
        <h3 className="text-3xl">Create Your Account</h3>
      </div>

      <div className="flex flex-col items-center justify-center text-white text-center">
        <form className="w-full max-w-sm space-y-4" onSubmit={handleSubmit}>
          <input
            name="username"
            type="text"
            placeholder="Username..."
            className="w-full px-4 py-2 rounded text-black bg-white"
            value={form.username}
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email..."
            className="w-full px-4 py-2 rounded text-black bg-white"
            value={form.email}
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password..."
            className="w-full px-4 py-2 rounded text-black bg-white"
            value={form.password}
            onChange={handleChange}
          />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password..."
            className="w-full px-4 py-2 rounded text-black bg-white"
            value={form.confirmPassword}
            onChange={handleChange}
          />

          {error && <p className="text-sm text-red-400">{error}</p>}

          <p className="text-sm text-white">
            By clicking Sign Up, you agree to our{" "}
            <a
              href="/terms"
              className="underline text-yellow-300 hover:text-yellow-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms and Conditions
            </a>
          </p>

          <button
            type="submit"
            className="bg-yellow-400 hover:bg-[var(--color-accent)] text-white font-bold py-2 px-6 rounded-lg transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </MainLayout>
  );
};

export default Register;
