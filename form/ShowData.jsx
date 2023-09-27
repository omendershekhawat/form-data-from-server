// import axios from "axios";
// import React,{useEffect, useState} from "react";
// import {link } from "react-router-dom";

// function ShowData(){
//     const [data, setData] = useState([]);
//     useEffect(() =>{
//         fetchStudentsData() {

//         }
//      async function fetchData(){
//         const result = await axios.get("http://localhost:4000");
//         setData(result.data);
//      }   
//      fetchData();
    
//     }, []),
//     return(
//         <>
//         {data.length > 0 ? (
//             <table>
//                 < thead>
//                 <tr>
//                 <th>S.no</th>
//                  <th>Name</th>
//                   <th>Age</th>
//                    <th>Phone</th>
//                    <th>Action</th>
//                 </tr>
//                 </thead>
//                 <tbody>
                    
                    
//                     {data.map ((student) =>{
//                         return(
//                             <tr className="record" key ={data().now}>
//                                 <td>{student.id}</td>
//                                 <td>{student.name}</td>
//                                 <td>{student.age}</td>
//                                 <td>{student.phone }</td>
//                                 <td>
//                                     <button onClick={()=>handleDelete(student.id) }>
//                                         Delete
                                 

//                                     </button>{" "}
//                                     ||<button>Edit</button>
//                                 </td>
//                             </tr>
//                         );
//                     })}

//                 </tbody>
//                 </table>
//         ) : (
//             ""
//         )}
//         <link to="/add">Add Data</link>
//         </>
//     );
// }
                
                
        
