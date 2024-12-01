"use client";
import toast, { Toaster } from 'react-hot-toast';

const activeToasts = [];

const notify = () => {
  // Limit to 5 notifications
  if (activeToasts.length >= 5) {
    // Remove the oldest notification if more than 5
    const oldestToastId = activeToasts.shift();
    toast.dismiss(oldestToastId); // Dismiss the oldest toast
  }

  // Create a new toast and track its ID
  const toastId = toast('Hello World', {
    duration: 4000,
    position: 'bottom-center',
    icon: '👏',
  });

  // Add the new toast ID to the tracking array
  activeToasts.push(toastId);
};

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       <button onClick={notify} className="bg-red-100 text-black p-2 rounded-md text-2xl bold">Click Me</button>
       <Toaster />
      </main>
    </div>
  );
}
