const fs = require('fs').promises;

// Function to log the error
async function logError(error) {
    try {
        // Format the date and time
        const timestamp = new Date().toISOString().replace('T', ' ').split('.')[0];

        // Format the log entry
        const logEntry = `[${timestamp}] Error: ${error.message}\nStack Trace:\n${error.stack}\n\n`;

        // Append the log entry to the file
        await fs.appendFile('error.log', logEntry);

        console.log("Error logged successfully.");
    } catch (fileError) {
        console.error("Failed to write to the log file:", fileError);
    }
}

// Example usage
try {
    // Simulate an error
    throw new Error("Sample error message for testing.");
} catch (error) {
    logError(error);
}