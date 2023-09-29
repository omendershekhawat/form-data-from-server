import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ShowData() {
    const [data, setData] = useState([]);
    useEffect(() => {
        // fetchStudentsData();

    }, []);
    async function fetchData() {
        const result = await axios.get("http://localhost:4000/student");
        setData(result.data);
    }
    function handleDelete(id) {
        axios.delete("http://localhost:4000/student/delete/" + id);
    }
    fetchData()

    return (
        <>
            {data.length > 0 ? (
                <table>
                    < thead>
                        <tr>
                            <th>S.no</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>


                        {data.map((student) => {
                            return (
                                <tr className="record" key={student._id}>
                                    <td>{student._id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.age}</td>
                                    <td>{student.phone}</td>
                                    <td>
                                        <button onClick={() => handleDelete(student._id)}>
                                            Delete
                                        </button>{" "}
                                        ||<button>Edit</button>
                                    </td>
                                </tr>
                            );
                        })}

                    </tbody>
                </table>
            ) : (
                ""
            )}
            <Link to="/add">Add Data</Link>
        </>
    );




}

export default ShowData;