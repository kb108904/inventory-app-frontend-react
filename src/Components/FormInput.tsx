import React, { useState } from "react";

function FormInput() {
  const [formData, setFormData] = useState({
    title: "",
    number: "",
    picture: null,
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: any) => {
    const file = e?.target?.files?.[0];
    if (file) {
      setFormData({
        ...formData,
        picture: file,
      });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission, e.g., sending data to the server
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label>Number:</label>
        <input
          type="number"
          name="number"
          value={formData.number}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label>Picture:</label>
        <input
          type="file"
          name="picture"
          onChange={handleFileChange}
          accept="image/*"
          required
        />
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default FormInput;
