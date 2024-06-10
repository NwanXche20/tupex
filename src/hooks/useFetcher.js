import React from "react";
import useSWR from "swr";

const fetcher = (...args) =>
  fetch(...args, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "74a65994c2msh532d5a1a89d502cp1e7d9djsn21470bac9c1d",
      "X-RapidAPI-Host": "free-images-api.p.rapidapi.com",
    },
  }).then((res) => res.json());

export const useFetcher = (searchItem = "flower", pageNumber = 1) => {
  const { data, error, isLoading } = useSWR(
    `https://free-images-api.p.rapidapi.com/v2/${searchItem || "flower"}/${
      pageNumber || 1
    }`,
    fetcher
  );

  return {
    pictures: data,
    isLoading,
    error,
  };
};
