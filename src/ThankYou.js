import React, { useEffect } from "react";

const ThankYou = () => {
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.location.href = "/welcome";
    }, 5000);

    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <div>
      <h2>Thank you for completing the survey!</h2>
      <p>Redirecting to Welcome page in 5 seconds...</p>
    </div>
  );
};

export default ThankYou;
