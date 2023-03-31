import { Route, Routes, Navigate } from "react-router-dom";
import Instructor from "./components/Instructor";
import Signup from "./components/Auth/SignUp";
import Login from "./components/Auth/Login";
import { ChakraProvider } from "@chakra-ui/react";
import Student from "./components/Student";
import NotFound from "./components/NotFound";
import CreateCourses from "./components/InstructorPages/courses/createCourses";
import Courses from "./components/InstructorPages/courses/Courses";
import CreateAssignments from "./components/InstructorPages/assignments/CreateAssignments";
import CourseStudents from "./components/InstructorPages/courses/CourseStudents";
import StudentCourses from "./components/StudentPages/courses/StudentCourses";
import StudentAssignments from "./components/StudentPages/assignments/StudentAssignments";
import ViewAssignmentSubmission from "./components/InstructorPages/assignments/ViewAssignmentSubmission";
import SingleSubmission from "./components/InstructorPages/assignments/SingleSubmission";
import PlagiarismPage from "./components/InstructorPages/assignments/PlagiarismPage";

function App() {
  const user = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <ChakraProvider>
      <Routes>
        {user && user.userType === "Instructor" && (
          <Route path="/" exact element={<Instructor />} />
        )}
        {user && user.userType === "Student" && (
          <Route path="/" exact element={<Student />} />
        )}
        {user && user.userType === "Instructor" && (
          <Route path="/login" element={<Navigate replace to="/" />} />
        )}
        {user && user.userType === "Instructor" && (
          <Route path="/signup" element={<Navigate replace to="/" />} />
        )}
        {user && user.userType === "Student" && (
          <Route path="/login" element={<Navigate replace to="/" />} />
        )}
        {user && user.userType === "Student" && (
          <Route path="/signup" element={<Navigate replace to="/" />} />
        )}
        {user && (
          <Route path="/createcourses" exact element={<CreateCourses />} />
        )}
        {user && (
          <Route
            path="/createassignment"
            exact
            element={<CreateAssignments />}
          />
        )}
        {user && user.userType === "Instructor" && (
          <Route path="/course" exact element={<Courses />} />
        )}
        {user && user.userType === "Student" && (
          <Route path="/course" exact element={<StudentCourses />} />
        )}
        {user && user.userType === "Student" && (
          <Route
            path="/viewassignment"
            exact
            element={<StudentAssignments />}
          />
        )}
        {user && user.userType === "Instructor" && (
          <Route
            path="/viewassignment"
            exact
            element={<ViewAssignmentSubmission />}
          />
        )}
        {user && user.userType === "Instructor" && (
          <Route path="/courseStudents" exact element={<CourseStudents />} />
        )}
        {user && user.userType === "Instructor" && (
          <Route path="/viewSubmission" exact element={<SingleSubmission />} />
        )}
        {user && user.userType === "Instructor" && (
          <Route path="/plagiarism" exact element={<PlagiarismPage />} />
        )}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
