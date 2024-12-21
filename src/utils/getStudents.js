import students from '../data/students.json';

export const getStudents = (pageSize, pageNumber) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const startIndex = (pageNumber - 1) * pageSize;
      const paginatedData = students.slice(startIndex, startIndex + pageSize);
      resolve(paginatedData);
    }, 2000);
  });
};

  