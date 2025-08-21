import React from "react";
import "./coursecard.css";
import { server } from "../../main";
import { UserData } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { CourseData } from "../../context/CourseContext";

const CourseCard = ({ course, onDelete }) => {
  const { user, isAuth } = UserData();
  const navigate = useNavigate();
  const { fetchCourse } =CourseData()

  const deleteHandler = async (id) => {
   if(confirm("Are you sure you want to delete this course")){
     try {
      const {data}=await axios.delete(`${server}/api/course/${id}`, 
        {
          headers:{
            token:localStorage.getItem("token"),
          }
        });
      toast.success("Course deleted successfully");
      fetchCourse();
      if (typeof onDelete === "function") onDelete(course._id);
    } catch (err) {
      toast.error("Error deleting course");
    }
   }
  };

  return (
    <div className="course-card">
      <img src={`${server}/${course.image}`} alt={course.title} className="course-image" />
      <h3>{course.title}</h3>
      <p>Instructor - {course.createdBy}</p>
      <p>Duration - {course.duration} weeks</p>
      <p>Price - ₹{course.price}</p>

      {/* Main Button Logic */}
      {isAuth ? (
        user && user.role !== "admin" ? (
          user?.subscription?.includes(course._id) ? (
            <button
              onClick={() => navigate(`/course/study/${course._id}`)}
              className="common-btn"
            >
              Study
            </button>
          ) : (
            <button
              onClick={() => navigate(`/course/${course._id}`)}
              className="common-btn"
            >
              Get Started
            </button>
          )
        ) : (
          <button
            onClick={() => navigate(`/course/study/${course._id}`)}
            className="common-btn"
          >
            Study
          </button>
        )
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="common-btn"
        >
          Get Started
        </button>
      )}

      <br />

      {/* Admin Delete Button */}
      {user && user.role === "admin" && (
        <button
          className="common-btn"
          style={{ background: "red" }}
          onClick={()=>deleteHandler(course._id)}
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default CourseCard;
