import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";

import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-charcoal">404</h1>
        <h2 className="mt-4 font-display text-3xl text-charcoal">Page not found</h2>
        <p className="mt-2 text-sm text-charcoal/60">
          This page seems to have wandered off the spice route.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-charcoal px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-cream hover:bg-clay transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-charcoal">Something went wrong</h1>
        <p className="mt-2 text-sm text-charcoal/60">
          We're looking into it. Please try again or return home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="bg-charcoal px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-cream hover:bg-clay transition-colors"
          >
            Try Again
          </button>
          <a
            href="/"
            className="border border-charcoal/20 px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-charcoal hover:border-charcoal transition-colors"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
