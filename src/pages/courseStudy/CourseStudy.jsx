import React, { useEffect } from "react";
import "./coursestudy.css";
import { useNavigate, useParams, Link } from "react-router-dom"; // ✅ Added Link import
import { CourseData } from "../../context/CourseContext";
import { UserData } from "../../context/UserContext";
import { server } from "../../main"; // ✅ Import server

const CourseStudy = () => {
  const params = useParams();
  const { fetchCourse, course } = CourseData();
  const { user } = UserData();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.role !== "admin" && !user?.subscription?.includes(params.id)) {
      navigate("/");
    }
  }, [user, params.id, navigate]);

  useEffect(() => {
    fetchCourse(params.id);
  }, [params.id, fetchCourse]);

  return (
    <>
      {course && (
        <div className="course-study-page">
          <img src={`${server}/${course.image}`} alt="" width={350} />
          <h2>{course.title}</h2>
          <h4>{course.description}</h4>
          <h5>by - {course.createdBy}</h5>
          <h5>Duration - {course.duration} weeks</h5>
          <Link to={`/lectures/${course._id}`}>
            <h2>Lectures</h2>
          </Link>
        </div>
      )}
    </>
  );
};

export default CourseStudy;
