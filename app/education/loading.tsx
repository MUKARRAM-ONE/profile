export default function Loading() {
  return (
    <section className="py-20 md:py-32">
      <div className="container max-w-5xl">
        <div className="max-w-3xl mb-16 animate-pulse">
          <div className="h-6 w-48 bg-slate-200 dark:bg-slate-800 rounded-full mb-6"></div>
          <div className="h-12 w-full bg-slate-200 dark:bg-slate-800 rounded-lg mb-4"></div>
          <div className="h-6 w-3/4 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
        </div>
        
        <div className="p-8 md:p-12 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 animate-pulse">
          <div className="h-8 w-2/3 bg-slate-200 dark:bg-slate-800 rounded-lg mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="h-16 bg-slate-200 dark:bg-slate-800 rounded-2xl"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
