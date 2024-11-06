"use client";
import { gql, useQuery } from "@apollo/client";
import client from "../../../lib/apollo-client";

const SAY_HELLO_QUERY = gql`
  query SayHello {
    sayHello
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(SAY_HELLO_QUERY, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>GraphQL Test</h1>
      <p>Say Hello: {data.sayHello}</p>
    </div>
  );
};

export default Home;
