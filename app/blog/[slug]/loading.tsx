export default function Loading() {
  return (
    <article className="py-20 md:py-32">
      <div className="container max-w-4xl">
        <div className="mb-16 animate-pulse">
          <div className="h-6 w-48 bg-slate-200 dark:bg-slate-800 rounded-full mb-6"></div>
          <div className="h-12 w-full bg-slate-200 dark:bg-slate-800 rounded-lg mb-4"></div>
          <div className="h-6 w-3/4 bg-slate-200 dark:bg-slate-800 rounded-lg mb-8"></div>
          <div className="flex gap-4">
            <div className="h-4 w-32 bg-slate-200 dark:bg-slate-800 rounded"></div>
            <div className="h-4 w-32 bg-slate-200 dark:bg-slate-800 rounded"></div>
          </div>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none animate-pulse space-y-4">
          <div className="h-6 w-full bg-slate-200 dark:bg-slate-800 rounded"></div>
          <div className="h-6 w-5/6 bg-slate-200 dark:bg-slate-800 rounded"></div>
          <div className="h-6 w-full bg-slate-200 dark:bg-slate-800 rounded"></div>
          <div className="h-6 w-4/5 bg-slate-200 dark:bg-slate-800 rounded"></div>
          <div className="h-48 w-full bg-slate-200 dark:bg-slate-800 rounded-xl my-8"></div>
          <div className="h-6 w-full bg-slate-200 dark:bg-slate-800 rounded"></div>
          <div className="h-6 w-3/4 bg-slate-200 dark:bg-slate-800 rounded"></div>
        </div>
      </div>
    </article>
  );
}
