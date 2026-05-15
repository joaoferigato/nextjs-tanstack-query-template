# Next.js + Tanstack Query Template

## Configuration
* Start a Next.js project following the official docs:    
`npx create-next-app@latest my-app --yes`  
https://nextjs.org/docs/app/getting-started/installation

* Install Tanstack Query following the official docs:  
`npm i @tanstack/react-query @tanstack/react-query-devtools`  
https://tanstack.com/query/latest/docs/framework/react/installation  
https://tanstack.com/query/latest/docs/framework/react/devtools

* Create a folder in your project and copy both files (*get-query-client.ts*, and *providers.tsx*) within */tanstack-query* folder to it

* Wrap your main *layout.tsx* with the *Providers* from *providers.tsx*

## Use Cases
### API Call within the */lib* folder
* *pokemon-api-calls.ts*  
A regular API call using *fetch*.

### Components within the */components* folder
* *pokemon-list-client.tsx*  
The usual way to use Tanstack Query using the *useQuery* hook.

* *pokemon-list-server.tsx*  
Use this pattern in Server Components that render the data directly.

* *pokemon-list-client-from-server.tsx* (Client Component) + *pokemon-list-sever-prefetched.tsx* (Server Component)  
This pattern retrieves the data in the Server Component and passes it to the Client Component.  
Note that the Client Component uses an empty *queryFn*, but it has the same *queryKey* as the Server Component, so it can retrieve the data from the cache without making an additional API call.

### Result at */app/tanstack-query/page.tsx*
* page.tsx  
A page wrapper to show the use cases.

## Access the examples
Access the examples at http://localhost:3000/tanstack-query after running your Next.js app.