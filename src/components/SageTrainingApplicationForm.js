import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SageTrainingApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    email: "",
    phone: "",
    address: "",
    currentSchool: "",
    grade: "",
    course: "",
    startDate: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    message: "",
  });

  const [page, setPage] = useState(1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/sage-training-application", formData);
      toast.success("Application Submitted Successfully!");
      setFormData({
        fullName: "",
        dateOfBirth: "",
        gender: "",
        nationality: "",
        email: "",
        phone: "",
        address: "",
        currentSchool: "",
        grade: "",
        course: "",
        startDate: "",
        emergencyContactName: "",
        emergencyContactPhone: "",
        message: "",
      });
      setPage(1);
    } catch (error) {
      toast.error("Error Submitting Application!");
    }
  };

  const handleNextPage = () => {
    if (page < 4) setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="bg-light p-4 rounded-3" style={{ backgroundColor: "rgba(255, 255, 255, 0.95)", backdropFilter: "blur(10px)" }}>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-3 shadow-sm">
        <h4 className="mb-4" style={{ color: "#000000" }}>Sage Training Institution Application</h4>

        {/* Welcome Message */}
        <p className="mb-4 text-muted" style={{ color: "#000000" }}>
          Welcome to Sage Training Institution! Please fill out the application form below to get started with your journey.
        </p>

        {/* Page 1: Personal Information */}
        {page === 1 && (
          <div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "#000000" }}>Full Name</label>
              <input
                type="text"
                className="form-control"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                style={{ backgroundColor: "rgba(255, 255, 255, 0.95)", borderColor: "#000000", color: "#000000" }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "#000000" }}>Date of Birth</label>
              <input
                type="date"
                className="form-control"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
                style={{ backgroundColor: "rgba(255, 255, 255, 0.95)", borderColor: "#000000", color: "#000000" }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "#000000" }}>Gender</label>
              <select
                className="form-select"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                style={{ backgroundColor: "rgba(255, 255, 255, 0.95)", borderColor: "#000000", color: "#000000" }}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "#000000" }}>Nationality</label>
              <input
                type="text"
                className="form-control"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                required
                style={{ backgroundColor: "rgba(255, 255, 255, 0.95)", borderColor: "#000000", color: "#000000" }}
              />
            </div>
          </div>
        )}

        {/* Page 2: Contact Information */}
        {page === 2 && (
          <div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "#000000" }}>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ backgroundColor: "rgba(255, 255, 255, 0.95)", borderColor: "#000000", color: "#000000" }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "#000000" }}>Phone Number</label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                style={{ backgroundColor: "rgba(255, 255, 255, 0.95)", borderColor: "#000000", color: "#000000" }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "#000000" }}>Address</label>
              <textarea
                className="form-control"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                style={{ backgroundColor: "rgba(255, 255, 255, 0.95)", borderColor: "#000000", color: "#000000" }}
              />
            </div>
          </div>
        )}

        {/* Page 3: Academic Information */}
        {page === 3 && (
          <div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "#000000" }}>Current School</label>
              <input
                type="text"
                className="form-control"
                name="currentSchool"
                value={formData.currentSchool}
                onChange={handleChange}
                required
                style={{ backgroundColor: "rgba(255, 255, 255, 0.95)", borderColor: "#000000", color: "#000000" }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "#000000" }}>Grade/Level</label>
              <input
                type="text"
                className="form-control"
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                required
                style={{ backgroundColor: "rgba(255, 255, 255, 0.95)", borderColor: "#000000", color: "#000000" }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "#000000" }}>Course/Program Interested In</label>
              <input
                type="text"
                className="form-control"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                style={{ backgroundColor: "rgba(255, 255, 255, 0.95)", borderColor: "#000000", color: "#000000" }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "#000000" }}>Preferred Start Date</label>
              <input
                type="date"
                className="form-control"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
                style={{ backgroundColor: "rgba(255, 255, 255, 0.95)", borderColor: "#000000", color: "#000000" }}
              />
            </div>
          </div>
        )}

        {/* Page 4: Additional Information */}
        {page === 4 && (
          <div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "#000000" }}>Emergency Contact Name</label>
              <input
                type="text"
                className="form-control"
                name="emergencyContactName"
                value={formData.emergencyContactName}
                onChange={handleChange}
                required
                style={{ backgroundColor: "rgba(255, 255, 255, 0.95)", borderColor: "#000000", color: "#000000" }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "#000000" }}>Emergency Contact Phone</label>
              <input
                type="tel"
                className="form-control"
                name="emergencyContactPhone"
                value={formData.emergencyContactPhone}
                onChange={handleChange}
                required
                style={{ backgroundColor: "rgba(255, 255, 255, 0.95)", borderColor: "#000000", color: "#000000" }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "#000000" }}>Additional Message</label>
              <textarea
                className="form-control"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                style={{ backgroundColor: "rgba(255, 255, 255, 0.95)", borderColor: "#000000", color: "#000000" }}
              />
            </div>
          </div>
        )}

        {/* Navigation buttons */}
        <div className="d-flex justify-content-between mt-4">
          {page > 1 && (
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={handlePreviousPage}
              style={{ borderColor: "#000000", color: "#000000" }}
            >
              Previous
            </button>
          )}
          {page < 4 ? (
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleNextPage}
              style={{ backgroundColor: "#000000", borderColor: "#000000", color: "#ffffff" }}
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-success"
              style={{ backgroundColor: "#000000", borderColor: "#000000", color: "#ffffff" }}
            >
              Submit Application
            </button>
          )}
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default SageTrainingApplicationForm;
