import React from 'react'

const WorkoutDetails = ({workout,onDelete }) => {

  const handleDelete = async () => {
    const response = await fetch(`/api/workouts/${workout._id}`, {
      method: "DELETE",
    });

    const json = await response.json();

    if (response.ok) {
      onDelete(workout._id);
    } else {
      console.error(json.error);
    }
  };


  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h1 className="text-2xl font-bold mb-2 text-blue-500">{workout.title}</h1>
      <p className="mb-1 text-gray-700"><strong>Load (in kg):</strong> {workout.load}</p>
      <p className="text-gray-700"><strong>Reps:</strong> {workout.reps}</p>
      <button onClick={handleDelete} className='bg-red-500 p-2 rounded-xl mt-2'>delete</button>
    </div>
  )
}

export default WorkoutDetails
