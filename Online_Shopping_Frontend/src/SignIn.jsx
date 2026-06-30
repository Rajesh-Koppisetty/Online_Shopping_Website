import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "./assets/login.jpg";

function SignIn() {
  const navigate = useNavigate();

  const [login, setLogin] = useState(true);

  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let newErrors = {};

    // Email Validation
    if (!user.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      newErrors.email = "Invalid email format";
    }

    // Password Validation
    if (!user.password) {
      newErrors.password = "Password is required";
    } else if (user.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Registration Fields
    if (!login) {
      if (!user.name) {
        newErrors.name = "Name is required";
      }

      if (!user.mobile) {
        newErrors.mobile = "Mobile number is required";
      } else if (!/^\d{10}$/.test(user.mobile)) {
        newErrors.mobile = "Mobile number must be exactly 10 digits";
      }

      if (!user.confirmPassword) {
        newErrors.confirmPassword = "Confirm Password is required";
      } else if (user.password !== user.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const url = login
      ? "http://localhost:8080/Student/login"
      : "http://localhost:8080/Student/register";

    const payload = login
      ? {
          email: user.email,
          password: user.password,
        }
      : {
          name: user.name,
          email: user.email,
          mobile: user.mobile,
          password: user.password,
          confirmPassword: user.confirmPassword,
        };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Invalid Credentials");
        }
        return res.json(); // Change to res.text() if backend returns String
      })
      .then((data) => {
        console.log(data);

        if (login) {
          alert("Login Successful");

          // Redirect to Home Page
          navigate("/home");
        } else {
          alert("Registration Successful");

          // Switch to Login Form
          setLogin(true);
        }

        setUser({
          name: "",
          email: "",
          mobile: "",
          password: "",
          confirmPassword: "",
        });
      })
      .catch((err) => {
        console.error(err);
        alert("Login Failed or Registration Failed");
      });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="w-50 border rounded p-5 bg-light shadow">
          <h2 className="text-center mb-4">
            {login ? "Login Form" : "Registration Form"}
          </h2>

          <form onSubmit={handleSubmit}>
            {!login && (
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                />
                <small className="text-danger">{errors.name}</small>
              </div>
            )}

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
              <small className="text-danger">{errors.email}</small>
            </div>

            {!login && (
              <div className="mb-3">
                <label className="form-label">Mobile</label>
                <input
                  type="tel"
                  className="form-control"
                  name="mobile"
                  value={user.mobile}
                  onChange={handleChange}
                />
                <small className="text-danger">{errors.mobile}</small>
              </div>
            )}

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
              <small className="text-danger">{errors.password}</small>
            </div>

            {!login && (
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="confirmPassword"
                  value={user.confirmPassword}
                  onChange={handleChange}
                />
                <small className="text-danger">
                  {errors.confirmPassword}
                </small>
              </div>
            )}

            <button type="submit" className="btn btn-primary w-100">
              {login ? "Login" : "Register"}
            </button>
          </form>

          <p
            className="text-center mt-3 text-primary"
            style={{ cursor: "pointer" }}
            onClick={() => setLogin(!login)}
          >
            {login
              ? "Don't have an account? Register"
              : "Already have an account? Login"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;