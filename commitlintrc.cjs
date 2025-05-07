module.exports = {
  // Extends the default configuration from commitlint that follows conventional commits.
  extends: ['@commitlint/config-conventional'],

  // Custom rules for commit messages.
  rules: {
    // Disable the rule that enforces a specific case for the subject line of the commit message.
    // [0, 'always'] means the rule is turned off.
    'subject-case': [0, 'always'],

    // Set the maximum line length for the body of the commit message to 300 characters.
    // [2, 'always', 300] means the rule is enforced as an error if exceeded.
    'body-max-line-length': [2, 'always', 300],

    // Disable the rule that enforces a maximum length for the commit message header.
    // [0, 'always', 200] means the rule is turned off, allowing headers up to 200 characters.
    'header-max-length': [0, 'always', 200],
  },
};
