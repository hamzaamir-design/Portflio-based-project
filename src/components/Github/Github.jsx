import React from 'react';
import { useLoaderData } from 'react-router-dom';

export default function Github() {
  const data = useLoaderData();

  if (!data) {
    return (
      <div className="text-center text-xl mt-10 text-gray-700 dark:text-gray-300">
        Loading GitHub data...
      </div>
    );
  }

  return (
    <div className="relative flex items-top justify-center min-h-[700px] bg-white dark:bg-gray-900 sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Left Section: Avatar & Stats */}
            <div className="p-6 bg-gray-100 dark:bg-gray-800 sm:rounded-lg flex flex-col items-center justify-center text-center">
              <img
                src={data.avatar_url}
                alt={`${data.name || data.login}'s avatar`}
                width={160}
                className="rounded-full border-4 border-white shadow-lg mb-4"
              />
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{data.name}</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">@{data.login}</p>
              {data.location && (
                <p className="text-sm text-gray-600 dark:text-gray-400">📍 {data.location}</p>
              )}
              {data.bio && (
                <p className="italic mt-4 text-gray-700 dark:text-gray-300">“{data.bio}”</p>
              )}
              <div className="flex justify-center gap-6 mt-6 text-base">
                <Stat label="Followers" value={data.followers} />
                <Stat label="Following" value={data.following} />
                <Stat label="Repos" value={data.public_repos} />
              </div>
            </div>

            {/* Right Section: Info Box */}
            <div className="p-6 flex flex-col justify-center bg-gray-50 dark:bg-gray-800 sm:rounded-lg">
              <h1 className="text-3xl sm:text-4xl text-gray-800 dark:text-white font-extrabold tracking-tight mb-4">
                GitHub Info
              </h1>
              <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 dark:text-gray-300">
                Below is the real-time fetched data from Hamza Amir’s GitHub profile using GitHub REST API v3.
              </p>
              <a
                href={data.html_url}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-8 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition text-center w-fit"
              >
                Visit GitHub Profile
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Stat Display
function Stat({ label, value }) {
  return (
    <div className="text-center">
      <p className="text-lg font-semibold text-gray-900 dark:text-white">{value}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
    </div>
  );
}

// Loader
export const githubInfoLoader = async () => {
  try {
    const response = await fetch('https://api.github.com/users/hamzaamir-design');
    if (!response.ok) throw new Error('GitHub API error');
    return await response.json();
  } catch (error) {
    console.error('Loader error:', error);
    throw error;
  }
};
