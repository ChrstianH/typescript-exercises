const greetUser = (): void => {
  const userName: string | null = window.prompt("Enter User name here");
  try {
    if (!userName || userName.length === 0) {
      throw new Error("User name is empty");
    }
    console.log(`Welcome, ${userName}`);
  } catch (error) {
    console.error(error);
    console.log("Welcome!");
  }
};

greetUser();
