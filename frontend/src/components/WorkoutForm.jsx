
import React, { useState } from "react";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  const handlesubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    const response = await fetch("/api/workouts/", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    setError(null);
    setTitle("");
    setLoad("");
    setReps("");
    console.log("New item added:,",json);
    
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handlesubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
      >
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Add a New Workout</h3>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Exercise Title:
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter exercise title"
        />
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Loads in Kg:
        </label>
        <input
          type="number"
          value={load}
          onChange={(e) => setLoad(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter load in kg"
        />
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Reps:
        </label>
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter number of reps"
        />
        <input
          type="submit"
          value="Add Workout"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer w-full"
        />
        {error && (
          <div className="mt-4 text-red-500 text-sm">
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default WorkoutForm;
