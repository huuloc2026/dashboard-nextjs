export const FetchProduct = async (token: string) => {
  const response = await fetch("http://localhost:8386/v1/api/product", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    return <div>Failed fetch data</div>;
  }
  const productsFromFetch = await response.json();
  return productsFromFetch.data;
};

export const FetchUser = async (token: string) => {
  const response = await fetch("http://localhost:8386/v1/api/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    return <div>Failed fetch data</div>;
  }
  const user = await response.json();
  return user.data;
};
