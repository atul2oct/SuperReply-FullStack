import { useState, useEffect } from "react";
// import { DataTable } from "@shadcn/ui";
import { getStudents } from "../utils/getStudents";

const columns = [
  { header: "Name", accessorKey: "name" },
  { header: "Age", accessorKey: "age" },
  { header: "Marks", accessorKey: "marks" },
  { header: "Roll Number", accessorKey: "rollNumber" },
  { header: "Class", accessorKey: "class" },
  { header: "City", accessorKey: "city" },
  { header: "Attendance", accessorKey: "attendance" },
];

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const pageSize = 10;

  useEffect(() => {
    setLoading(true);
    getStudents(pageSize, currentPage)
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Student Management</h1>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        {/* <DataTable
          data={students}
          columns={columns}
          options={{
            pagination: {
              currentPage,
              totalItems: 50, // Assume a total of 50 students
              pageSize,
              onChange: handlePageChange,
            },
          }}
          className="w-full"
        /> */}
      )}
    </div>
  );
};

export default StudentTable;
