function createResumeApiError(port, error) {
  if (error.code === "EADDRINUSE") {
    return [
      `Error: Port ${port} is already in use.`,
      `To fix this, stop the process using port ${port} or set PORT to a different value.`,
      `Windows tip: netstat -ano | findstr :${port}`,
    ].join("\n");
  }

  return `Server error: ${error.message}`;
}

module.exports = { createResumeApiError };
