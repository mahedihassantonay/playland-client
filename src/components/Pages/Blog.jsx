const Blog = () => {
  return (
    <div className="container mx-auto">
      <div className="p-4">
        <h1 className="text-2xl font-semibold">
          #What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h1>
        <p className="text-gray-500">
          <li>
            An access token is a credential used to authenticate and authorize a
            user or an application to access protected resources, such as APIs
            or web services.
          </li>
          <li>
            It is typically short-lived and has a limited lifespan, usually
            lasting for a few minutes or hours.
          </li>
          <li>
            The access token is included in API requests as a header or query
            parameter to prove the identity and permissions of the requester.
          </li>
        </p>
        <br />
        <p className="text-gray-500">
          <li>
            A refresh token is a credential used to obtain a new access token
            when the current access token expires.
          </li>
          <li>
            Refresh tokens are typically long-lived and have a longer lifespan
            compared to access tokens, usually lasting for days, weeks, or even
            months.
          </li>
        </p>{" "}
        <br />
        <p className="text-gray-500">
          <li>
            Access tokens should be stored in a secure manner, such as in an
            HTTP-only cookie or in browser memory
          </li>
        </p>
      </div>

      <div className="p-4">
        <h1 className="text-2xl font-semibold">#Compare SQL and NoSQL databases?
</h1>
        <p className="text-gray-500">
            <li>SQL databases are based on a structured data model, use SQL for querying, and provide strong consistency (e.g., MySQL).</li>
            <li>NoSQL databases are based on an unstructured or semi-structured data model, offer flexible schema, and prioritize scalability (e.g., MongoDB).</li>
           
        </p>
      </div>
      <div className="p-4">
        <h1 className="text-2xl font-semibold">#What is express js? What is Nest JS?
</h1>
        <p className="text-gray-500">
            <li>Express.js is a  web application framework for Node.js.</li>
            <li>Express.js handles HTTP requests and responses, routing, middleware</li>
            <li>It provides a simple and straightforward way to build web applications and APIs.
</li>
        </p> <br />
        <p className="text-gray-500">
            <li>Next.js is a React framework for building server-side rendered (SSR) and static websites</li>
            <li>Next.js offers features like automatic code splitting, hot module replacement, and server-side rendering, which optimize performance and improve user experience.</li>
            <li>It simplifies the process of creating and deploying React applications by providing built-in support for server-side rendering, routing, and code splitting.</li>
            <li>It also provides convenient features like file-based routing, API routes, and support for CSS-in-JS libraries, making it a versatile framework for building modern web applications.</li>
            
        </p>
      </div>
      <div className="p-4">
        <h1 className="text-2xl font-semibold">#What is MongoDB aggregate and how does it work?
</h1>
        <p className="text-gray-500">
            <li>MongoDB Aggregation is a framework that allows you to perform advanced data processing and analysis operations on MongoDB collections.</li>
            <li>It provides a way to perform complex queries, transformations, and aggregations on your data in a flexible and efficient manner.</li>
            <li>The stages can perform tasks like filtering, sorting, grouping, projecting, joining, and calculating aggregate functions, allowing you to extract meaningful insights from your data.</li>
        </p>
      </div>
    </div>
  );
};

export default Blog;
