function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(email)
    return emailRegex.test(email);
}

const isValidGitUrl = (url) => {
    const gitUrlPattern = /^(https:\/\/|git@)(github\.com|bitbucket\.org|gitlab\.com)\/[\w.-]+\/[\w.-]+(\.git)?$/;
    return gitUrlPattern.test(url);
};


export {isValidEmail,isValidGitUrl}