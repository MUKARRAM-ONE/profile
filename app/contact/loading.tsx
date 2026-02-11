export default function Loading() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-3xl mb-16 animate-pulse">
          <div className="h-6 w-48 bg-slate-200 dark:bg-slate-800 rounded-full mb-6"></div>
          <div className="h-12 w-full bg-slate-200 dark:bg-slate-800 rounded-lg mb-4"></div>
          <div className="h-6 w-3/4 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 animate-pulse">
              <div className="h-14 w-14 bg-slate-200 dark:bg-slate-800 rounded-2xl mb-6"></div>
              <div className="h-6 w-1/2 bg-slate-200 dark:bg-slate-800 rounded mb-4"></div>
              <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded"></div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto p-8 md:p-12 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 animate-pulse">
          <div className="space-y-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-12 bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
            ))}
            <div className="h-32 bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
            <div className="h-12 bg-slate-200 dark:bg-slate-800 rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
