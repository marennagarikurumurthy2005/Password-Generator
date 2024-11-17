// Function to generate a 6-digit password
function generatePassword() {
    // Generate a random 6-digit number
    const password = Math.floor(100000 + Math.random() * 900000);
    
    // Display the generated password in the input field
    document.getElementById('passwordField').value = password;
}

// Function to copy the password to clipboard
function copyToClipboard() {
    const passwordField = document.getElementById('passwordField');
    passwordField.select();
    document.execCommand('copy');
}

// Event listeners for button clicks
document.getElementById('generateBtn').onclick = generatePassword;
document.getElementById('copyButton').onclick = copyToClipboard;
