const validator = require("validator");

const emails = ["a@b.com", "bad@", "user.name@gmail.com"];
const urls = ["https://example.com", "htp:/nope"];

emails.forEach((email) =>{
    if (validator.isEmail(email)){
        console.log(`${email} is a valid email.`);
    }
    else{
        console.log(`${email} is NOT a valid email.`);
    };

});

urls.forEach((url) =>{
    if(validator.isURL(url)){
 console.log(`${url} is a vails URL.`);

    }else{
        console.log(`${url} is not  a valid URL.`);
    }
})

