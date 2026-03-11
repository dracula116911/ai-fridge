import React from "react";

const Loader = () => {
  return (
    <div className="w-full max-w-2xl mt-12 p-8 rounded-3xl bg-white/20 dark:bg-slate-900/20 backdrop-blue-xl border border-white/10 dark:border-slate-800 animate-pulse">
        <div className="h-8 w-48 bg-slate-300 dark:bg-slate-700 rounded-lg mb-6" />
        
        <div className="flex gap-4 mb-8">
            <div className="h-4 w-20 bg-slate-200 dark:bg-slate-800 rounded-full" />
            <div className="h-4 w-20 bg-slate-200 dark:bg-slate-800 rounded-full" />
        </div>
        <div className="space-y-4">
            <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded-md" />
            <div className="h-4 w-5/6 bg-slate-200 dark:bg-slate-800 rounded-md" />
            <div className="h-4 w-4/6 bg-slate-200 dark:bg-slate-800 rounded-md" />
        </div>
    </div>
  );
};

export default Loader;
