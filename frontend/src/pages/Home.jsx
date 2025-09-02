import React from "react";
import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
  const [workouts, setWorkouts] = useState([]);


  useEffect(() => {
    const fetchWorkouts = async () => {
      try{
     const response = await fetch("/api/workouts/");

      const json = await response.json();
      if (response.ok) {
        setWorkouts(json);

      }else{
        console.error("Failed to fetch workouts:", json.error || json);
      }
    }catch(error){
       console.error("Error fetching workouts:", error);
    }
    };
    fetchWorkouts();
  }, []);


   const handleDelete = (id) => {
    setWorkouts(workouts.filter((workout) => workout._id !== id));
  };


  return (
    <div className="home min-h-screen bg-gray-100 py-8">
      <div className="workouts max-w-xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Workouts</h2>
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout}
            onDelete={handleDelete} 
            />
          ))}
      </div>
      
    </div>
  );
};

export default Home;
