

const StudentCard = ({ student }) => (
  <div className="p-4 border rounded-md shadow-md mb-4">
    <h2 className="text-lg font-bold">{student.name}</h2>
    <p>Age: {student.age}</p>
    <p>Marks: {student.marks}</p>
    <p>Roll Number: {student.rollNumber}</p>
  </div>
);

export default StudentCard;
