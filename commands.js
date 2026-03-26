/* 
 * Outlook Add-in Command Functions
 * This file handles the ribbon button click action
 */

Office.onReady(() => {
  // Office is ready
});

/**
 * Opens the Microsoft Form in a new browser window
 * @param {Office.AddinCommands.Event} event - The event object
 */
function openForm(event) {
  // Replace this URL with your actual Microsoft Form URL
  const formUrl = "https://forms.office.com/r/kpN7q5v42c";
  
  // Open the form in a new window
  window.open(formUrl, '_blank');
  
  // Signal that the command has completed
  event.completed();
}

// Register the function
Office.actions.associate("openForm", openForm);
