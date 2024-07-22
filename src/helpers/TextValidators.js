function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(email)
    return emailRegex.test(email);
}



export {isValidEmail}