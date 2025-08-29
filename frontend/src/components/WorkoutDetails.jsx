import React from 'react'

const WorkoutDetails = ({workout}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h1 className="text-2xl font-bold mb-2 text-gray-800">{workout.title}</h1>
      <p className="mb-1 text-gray-700"><strong>Load (in kg):</strong> {workout.load}</p>
      <p className="text-gray-700"><strong>Reps:</strong> {workout.reps}</p>
    </div>
  )
}

export default WorkoutDetails
