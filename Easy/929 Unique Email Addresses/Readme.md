## Problem

Every email consists of a local name and a domain name, separated by the @ sign.

For example, in alice@leetcode.com, alice is the local name, and leetcode.com is the domain name.

Besides lowercase letters, these emails may contain '.'s or '+'s.

If you add periods ('.') between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name.  For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.  (Note that this rule does not apply for domain names.)

If you add a plus ('+') in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered, for example m.y+name@email.com will be forwarded to my@email.com.  (Again, this rule does not apply for domain names.)

It is possible to use both of these rules at the same time.

Given a list of emails, we send one email to each address in the list.  How many different addresses actually receive mails?

Example 1:

Input: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]

Output: 2

Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails

Note:

1 <= emails[i].length <= 100

1 <= emails.length <= 100

Each emails[i] contains exactly one '@' character.

## Pre analysis

Will heuristically remove '+' and '.' to calculate local names

## Post analysis

Only result that was expected was length of number of unique. Hash would had been better solution than set.

## Another solution

Hash Based solution

1.

    var numUniqueEmails = function(emails) {
        const domains = {};
        let count = 0;
        for (let email of emails) {
            const atIndex = email.indexOf('@') + 1;
            const domain = email.slice(atIndex);
            const name = email.slice(0, email.indexOf('+'));
            const sanitizedName = name.replace(/\./g, '');
            if (domains[domain]) {
                if (domains[domain].indexOf(sanitizedName) === -1) {
                    domains[domain].push(sanitizedName);
                    count++;
                }
            } else {
                domains[domain] = [sanitizedName];
                count++;
            }
        }
        return count;
    };

2.

    var numUniqueEmails = function(emails) {

        const unique = [];

        for (let email of emails) {
            let split = email.split('@');
            let left = split[0].split('+')[0].replace(/./g, '');
            if (!unique.includes(left+"@"+split[1]))
                unique.push(left+"@"+split[1]);
        }

        return Object.keys(unique).length;

    };
