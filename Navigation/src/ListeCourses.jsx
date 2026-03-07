// ListeCourses.jsx
function ListeCourses({ articles }) {
  return (
    <ul>
      {articles.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ListeCourses;
