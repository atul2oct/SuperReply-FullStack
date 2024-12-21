import { useState, useEffect } from 'react';
import { getStudents } from './utils/getStudents';
import StudentCard from './components/StudentCard';
import StudentTable from './components/StudentTable';
import Pagination from './components/Pagination';

const App = () => {
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStudents(10, currentPage);
      setStudents(data);
    };
    fetchData();

    const handleResize = () => setIsMobileView(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial size
    return () => window.removeEventListener('resize', handleResize);
  }, [currentPage]);

  return (
    <div className="p-4">
      {isMobileView ? (
        students.map((student) => <StudentCard key={student.rollNumber} student={student} />)
      ) : (
        <>
          {/* <StudentTable students={students} /> */}
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(50 / 10)} // Assuming 50 total students
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default App;
