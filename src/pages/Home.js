import React, { useEffect, useState } from "react";
import { Question } from "../components/Question";

function Home() {
  const [data,setData] = useState()
  useEffect(() => {
    console.log("hello");

    fetch(
      "https://opentdb.com/api.php?amount=15&category=18&difficulty=easy&type=multiple"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        // Get a ReadableStream from the response body
        const stream = response.body;

        // Create a text decoder to convert binary data to text
        const textDecoder = new TextDecoder("utf-8");

        // Create a reader for the stream
        const reader = stream.getReader();

        // Function to read and process the data
        function readData() {
          reader
            .read()
            .then(({ done, value }) => {
              if (done) {
                console.log("Stream finished");
                return;
              }

              // Convert the binary data to text
              const text = textDecoder.decode(value);
              const jsonData = JSON.parse(text);
              // Process the text data (you can do anything with it)
              console.log(jsonData);
              setData(jsonData)

              // Continue reading the stream
              readData();
            })
            .catch((error) => {
              console.error("Error reading stream:", error);
            });
        }

        // Start reading the data from the stream
        readData();
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  return <div>
    {data?.results.map((qn,ind)=><Question {...{qn,ind}}/>)}
  </div>;
}

export default Home;


