import React from "react";
import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
  const [workouts, setWorkouts] = useState([]);


  useEffect(() => {
    const fetchWorkouts = async () => {
     const response = await fetch("/api/workouts/");

      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);

      }
    };
    fetchWorkouts();
  }, [setWorkouts]);
  return (
    <div className="home min-h-screen bg-gray-100 py-8">
      <div className="workouts max-w-xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Workouts</h2>
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout}/>
          ))}
      </div>
      <WorkoutForm></WorkoutForm>
      
    </div>
  );
};

export default Home;
