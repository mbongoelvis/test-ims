import React from 'react'
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

export const QuickAcctions = () => {
  return (
    <div className="border rounded-xl p-4">
      <div>
        <p className="text-lg font-bold">Quick Actions</p>
        <p className="text-sm opacity-65">Frequently used system Fuctions</p>
      </div>
      {/* action buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        <Link className="bg-dprimary flex justify-center items-center text-white py-6 rounded-xl mt-2">
          Add User
        </Link>
        <Link className="bg-dprimary flex justify-center items-center text-white py-6 rounded-xl mt-2">
          Add User
        </Link>
        <Link className="bg-dprimary flex justify-center items-center text-white py-6 rounded-xl mt-2">
          Add User
        </Link>
        <Link className="bg-dprimary flex justify-center items-center text-white py-6 rounded-xl mt-2">
          Add User
        </Link>
      </div>
    </div>
  );
}
