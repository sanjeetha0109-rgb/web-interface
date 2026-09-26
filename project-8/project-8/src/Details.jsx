import { useState } from "react";
import "./Details.css";

function Details() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    aadhaar: "",
    phone: "",
    email: "",
    dob: "",
    gender: "",
    department: "",
    year: "",
    college: "",
    password: "",
    confirm: "",
    permanent: "",
    current: "",
    city: "",
    state: ""
  });

  const [photo, setPhoto] = useState(null);
  const [same, setSame] = useState(false);
  const [msg, setMsg] = useState("");

  const change = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });

    if (name === "permanent" && same) {
      setForm({
        ...form,
        permanent: value,
        current: value
      });
    }
  };

  const submit = (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(form.phone)) {
      return setMsg("Enter valid 10-digit phone number");
    }

    if (!/^\d{12}$/.test(form.aadhaar)) {
      return setMsg("Enter valid 12-digit Aadhaar number");
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      return setMsg("Enter valid email");
    }

    if (form.password.length < 6) {
      return setMsg("Password must have 6 characters");
    }

    if (form.password !== form.confirm) {
      return setMsg("Passwords do not match");
    }

    setMsg("Registration Successful!");
  };

  const fileChange = (e) => {
    const file = e.target.files[0];

    if (file && file.size > 2 * 1024 * 1024) {
      setMsg("Photo must be below 2 MB");
      setPhoto(null);
    } else {
      setPhoto(file);
      setMsg("");
    }
  };

  const clear = () => {
    setForm({
      name: "",
      username: "",
      aadhaar: "",
      phone: "",
      email: "",
      dob: "",
      gender: "",
      department: "",
      year: "",
      college: "",
      password: "",
      confirm: "",
      permanent: "",
      current: "",
      city: "",
      state: ""
    });

    setPhoto(null);
    setSame(false);
    setMsg("");
  };

  return (
    <div className="box">
      <h1>Student Registration</h1>

      <form onSubmit={submit}>

        {[
          ["name", "Student Name"],
          ["username", "Username"],
          ["aadhaar", "Aadhaar Number"],
          ["phone", "Phone Number"],
          ["email", "Email"],
          ["dob", "Date of Birth"],
          ["department", "Department"],
          ["year", "Year"],
          ["college", "College Name"],
          ["permanent", "Permanent Address"],
          ["current", "Current Address"],
          ["city", "City"],
          ["state", "State"]
        ].map(([name, label]) => (
          <input
            key={name}
            name={name}
            type={name === "dob" ? "date" : "text"}
            placeholder={label}
            value={form[name]}
            onChange={change}
            required
          />
        ))}

        <select
          name="gender"
          value={form.gender}
          onChange={change}
          required
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={change}
          required
        />

        <input
          name="confirm"
          type="password"
          placeholder="Confirm Password"
          value={form.confirm}
          onChange={change}
          required
        />

        <label>
          <input
            type="checkbox"
            checked={same}
            onChange={(e) => {
              setSame(e.target.checked);

              if (e.target.checked) {
                setForm({
                  ...form,
                  current: form.permanent
                });
              }
            }}
          />
          Same as Permanent Address
        </label>

        <label>Upload Photo (Maximum 2 MB)</label>

        <input
          type="file"
          accept="image/*"
          onChange={fileChange}
        />

        {msg && <p className="message">{msg}</p>}

        <button type="submit">Submit</button>

        <button type="button" onClick={clear}>
          Clear
        </button>

      </form>
    </div>
  );
}

export default Details;