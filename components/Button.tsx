import { HTMLAttributes } from "react";

export function Button(props: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="flex items-center gap-3 py-2 px-3 bg-blue-400 rounded-md text-sm text-blue-400 
    font-medium bg-opacity-10 hover:bg-opacity-80 hover:text-gray-50 ease-in-out transition-all 
    duration-300"
      {...props}
    />
  );
}
