import * as React from 'react';

import { classNames } from '@headlessui/react/dist/utils/class-names';

export function App() {
  return (
    <div
      className={classNames(
        'App',
        'w-full h-full flex justify-center items-center',
        'bg-gray-100'
      )}
    >
      <div>
        <h1 className="text-gray-800 text-3xl font-bold">
          <span className="text-indigo-700">React + TailwindUI</span> Template
        </h1>
        <h2 className="font-medium italic text-gray-500 font-mono">
          // Oskar Herz (2022)
        </h2>
      </div>
    </div>
  );
}
