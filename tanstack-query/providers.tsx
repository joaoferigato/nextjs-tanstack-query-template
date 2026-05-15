'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { getQueryClient } from '@/tanstack-query/get-query-client'

export default function Providers({ children }: { children: React.ReactNode }) {
    // NOTE: Avoid making the queryClient at the top level of the file
    // as it would be shared by all requests if the client is not careful.
    const queryClient = getQueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}