"use client";

import React, { useEffect, useState } from "react";

export default function Home() {
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const response = await fetch("/api/facultyDetails");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setBranches(data); // Save the data in state
      } catch (err) {
        console.log(err); // Set error message
      } finally {
        setLoading(false); // Stop loading indicator
      }
    };

    fetchBranches();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Branch Details</h1>
      <table>
        <thead>
          <tr>
            <th>PKY</th>
            <th>Branch Code Title</th>
          </tr>
        </thead>
        <tbody>
          {branches.map((branch) => (
            <tr key={branch.pky}>
              <td>{branch.pky}</td>
              <td>{branch.brcode_title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
