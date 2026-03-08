import React from "react";

function StudentTable({ students, setEditing, deleteStudent }) {

  return (
    <div>

      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {students.length === 0 ? (
            <tr>
              <td colSpan="4">No students found</td>
            </tr>
          ) : (
            students.map((s) => (
              <tr key={s.id}>

                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.age}</td>

                <td>

                  <button
                    className="edit-btn"
                    onClick={() => setEditing(s)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteStudent(s.id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))
          )}

        </tbody>

      </table>

    </div>
  );
}

export default StudentTable;