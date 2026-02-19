import React, { useState, useRef } from "react";
import { SiGmail } from "react-icons/si";
import { FaUserTie, FaUniversity, FaInfo, FaRegSave, FaGithub, FaRegCalendarAlt, FaLinkedinIn } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";


const Profile = () => {

  const [formData, setFormData] = useState({
    name: "Shubham Kumar",
    email: "shubruvvv@gmail.com",
    college: "Allenhouse Institute of Technology, Kanpur",
    year: "2024",
    skills: "React, Python, JavaScript",
    linkedin: "linkedin.com/in/shubham362sk",
    github: "github.com/shubha362sk",
    bio: "Passionate software developer seeking frontend/full-stack roles."
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Profile Saved!");
  };

  const [profilePic, setProfilePic] = useState(null);
  const fileInputRef = useRef(null);

    const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
};


  return (
    <div className='min-h-screen bg-gray-100 flex items-start justify-center p-6'>
      <div className='w-full max-w-4xl'>

        {/* Header */}
        <h1 className='text-2xl font-semibold text-gray-800'>Profile Settings</h1>
        <p className='text-gray-500 mb-6'>Manage your personal information</p>

        {/* top profile */}
        <div className='bg-white rounded-2xl shadow p-6 flex items-center gap-5 mb-6'>

          <div
            className="w-20 h-20 rounded-full overflow-hidden border cursor-pointer hover:opacity-80 transition"
            onClick={() => fileInputRef.current.click()}
          >
            {profilePic ? (
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500 text-sm">
                Upload
              </div>
            )}
          </div>

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
            className="hidden"
          />

          <div>
            <h2 className='text-lg font-semibold text-gray-800'>
              {formData.name}
            </h2>

            <p className='text-sm text-gray-500'>
              {formData.email}
            </p>

            <p>
              {formData.college} · MCA · Batch {formData.year}
            </p>
          </div>

        </div>


        {/* form*/}
        <div className='bg-white rounded-2xl shadow p-6'>
          <form className='space-y-5' onSubmit={handleSubmit}>

            {/* row1 */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

              <div>
                <div className='flex items-center gap-2'>
                  <FaUserTie />
                  <label className="text-sm text-gray-500">FULL NAME</label>
                </div>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  className="mt-1 w-full bg-gray-50 rounded-xl border px-4 py-2"
                />
              </div>

              <div>
                <div className='flex items-center gap-2'>
                  <SiGmail />
                  <label className="text-sm text-gray-500">EMAIL</label>
                </div>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  className="mt-1 w-full bg-gray-50 rounded-xl border px-4 py-2"
                />
              </div>
            </div>

            {/* row2 */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

              <div>
                <div className='flex items-center gap-2'>
                  <FaUniversity />
                  <label className="text-sm text-gray-500">COLLEGE</label>
                </div>
                <input
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  type="text"
                  className="mt-1 w-full bg-gray-50 rounded-xl border px-4 py-2"
                />
              </div>

              <div>
                <div className='flex items-center gap-2'>
                  <FaRegCalendarAlt />
                  <label className="text-sm text-gray-500">COLLEGE YEAR</label>
                </div>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className='mt-1 w-full bg-gray-50 rounded-xl border px-4 py-2'
                >
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                </select>
              </div>
            </div>

            {/* skills */}
            <div>
              <div className='flex items-center gap-2'>
                <GiSkills />
                <label className='text-sm text-gray-500'>SKILLS</label>
              </div>
              <input
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                type="text"
                className='mt-1 w-full bg-gray-50 rounded-xl border px-4 py-2'
              />
            </div>

            {/* links */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

              <div>
                <div className='flex items-center gap-2'>
                  <FaLinkedinIn />
                  <label className="text-sm text-gray-500">LINKEDIN</label>
                </div>
                <input
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  type="text"
                  className="mt-1 w-full bg-gray-50 rounded-xl border px-4 py-2"
                />
              </div>

              <div>
                <div className='flex items-center gap-2'>
                  <FaGithub />
                  <label className="text-sm text-gray-500">GITHUB</label>
                </div>
                <input
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  type="text"
                  className="mt-1 w-full bg-gray-50 rounded-xl border px-4 py-2"
                />
              </div>
            </div>

            {/* bio */}
            <div>
              <div className='flex items-center gap-2'>
                <FaInfo />
                <label className="text-sm text-gray-500">BIO</label>
              </div>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows={4}
                className="mt-1 w-full rounded-xl border px-4 py-2"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 flex items-center gap-2 hover:bg-blue-700 text-white px-6 py-2 rounded-xl"
            >
              <FaRegSave /> Save Changes
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile
