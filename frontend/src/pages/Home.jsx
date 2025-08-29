import React from "react";
import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
     const response = await fetch("/api/workouts/");

      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);

      }
    };
    fetchWorkouts();
  }, [workouts]);
  return (
    <div className="home min-h-screen bg-gray-100 py-8">
      <div className="workouts max-w-xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Workouts</h2>
        {workouts &&
          workouts.map((workout) => (
            // <div
            //   key={workout._id}
            //   className="mb-4 p-4 border border-gray-200 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
            // >
            //   <p className="text-lg font-medium text-gray-700">{workout.title}</p>
            // </div>
            <WorkoutDetails key={workout._id} workout={workout}/>
          ))}
      </div>
    </div>
  );
};

export default Home;
