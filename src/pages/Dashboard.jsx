import React, { useState, useEffect } from "react";
import empApi from "../api/empApi";
import Main from "../layouts/Main";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
const Dashboard = () => {
  const [users, setusers] = useState([]);
  const { authInfo } = useSelector((state) => state.auth);

  const userDetails = async () => {
    try {
      const response = await empApi.get("/user/userdetails", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authInfo.token}`,
        },
      });
      if (response.status === 200) {
        setusers(response.data);
      } else {
        toast.warn(response.data.msg);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    userDetails();

    return () => {};
  }, []);
  return (
    <Main>
      <div className="flex justify-center items-center mt-5">
        <h1 className="text-cyan-600 font-bold text-4xl">Users</h1>
      </div>
      <div className="flex text-cyan-500 justify-center items-center uppercase text-2xl font-semibold">
        <p className="">NO Of Users :</p>
        <p>{users.length}</p>
      </div>

      {users && (
        <div className="shadow overflow-x-auto  my-10 border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-indigo-200 text-gray-900">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-lg font-semibold text-gray-900 capatalize tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-lg font-semibold text-gray-900 capatalize tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-lg font-semibold text-gray-900 capitalize  tracking-wider"
                >
                  Phone
                </th>

                <th
                  scope="col"
                  className="px-6 py-3 text-left text-lg font-semibold text-gray-900 capatalize tracking-wider"
                >
                  document
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-100 text-gray-900 divide-y-2 divide-white">
              {users?.map((person) => (
                <tr key={uuidv4()}>
                  <td className="px-6 py-4 whitespace-nowrap text-base font-medium">
                    {person.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-base font-medium">
                    {person.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-base font-medium">
                    {person.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-base font-medium">
                    <a
                      rel="noreferrer"
                      href={`http://127.0.0.1:8181/${person.document}`}
                      target="_blank"
                    >
                      {person.document}
                    </a>
                    {person.documents}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Main>
  );
};

export default Dashboard;
