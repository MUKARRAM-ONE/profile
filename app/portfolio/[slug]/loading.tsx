export default function Loading() {
  return (
    <article className="py-20 md:py-32">
      <div className="container max-w-5xl">
        <div className="mb-16 animate-pulse">
          <div className="h-6 w-48 bg-slate-200 dark:bg-slate-800 rounded-full mb-6"></div>
          <div className="h-12 w-full bg-slate-200 dark:bg-slate-800 rounded-lg mb-4"></div>
          <div className="h-6 w-3/4 bg-slate-200 dark:bg-slate-800 rounded-lg mb-8"></div>
          <div className="flex gap-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-6 w-20 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
            ))}
          </div>
        </div>

        <div className="space-y-8 animate-pulse">
          <div className="h-96 w-full bg-slate-200 dark:bg-slate-800 rounded-3xl"></div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="h-4 w-24 bg-slate-200 dark:bg-slate-800 rounded mb-2"></div>
              <div className="h-6 w-full bg-slate-200 dark:bg-slate-800 rounded"></div>
            </div>
            <div>
              <div className="h-4 w-24 bg-slate-200 dark:bg-slate-800 rounded mb-2"></div>
              <div className="h-6 w-full bg-slate-200 dark:bg-slate-800 rounded"></div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="h-6 w-full bg-slate-200 dark:bg-slate-800 rounded"></div>
            <div className="h-6 w-5/6 bg-slate-200 dark:bg-slate-800 rounded"></div>
            <div className="h-6 w-full bg-slate-200 dark:bg-slate-800 rounded"></div>
          </div>
        </div>
      </div>
    </article>
  );
}
