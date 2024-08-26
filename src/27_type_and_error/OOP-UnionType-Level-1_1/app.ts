type Result = "success" | "error" | "pending";

const result: Result = "pending";

const handleResult = (resultParam: Result) => {
  console.log(
    `Result is: %c${resultParam}`,
    resultParam === "success"
      ? "background-color:green;color:white;"
      : resultParam === "pending"
      ? "background-color:yellow;color:black;"
      : "background-color:red;color:white;"
  );
};

handleResult(result);
handleResult("success");
handleResult("error");
