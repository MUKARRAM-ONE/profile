export default function Loading() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-3xl mb-16 animate-pulse">
          <div className="h-6 w-48 bg-slate-200 dark:bg-slate-800 rounded-full mb-6"></div>
          <div className="h-12 w-full bg-slate-200 dark:bg-slate-800 rounded-lg mb-4"></div>
          <div className="h-6 w-3/4 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 animate-pulse">
              <div className="h-48 bg-slate-200 dark:bg-slate-800 rounded-xl mb-4"></div>
              <div className="h-6 w-3/4 bg-slate-200 dark:bg-slate-800 rounded mb-3"></div>
              <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded mb-2"></div>
              <div className="h-4 w-2/3 bg-slate-200 dark:bg-slate-800 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
