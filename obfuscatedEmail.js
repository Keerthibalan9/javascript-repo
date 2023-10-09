// defauul mail id

function strToWord(email){
    let b=email.split("@");
    let first=(b[0]);
    let last=(b[1]);
    let visible=first.slice(0,5)
    let hidStar=(first.length-visible.length);
    let stars="*".repeat(hidStar)
    return visible + stars + '@' + last
}
strToWord("keerthibalan@gmail.com")

// dynamic mail id
function hidEmail(){
    let email=prompt("Enter your email address")
    let b=email.split("@");
    let first=(b[0]);
    let last=(b[1]);
    let visible=first.slice(0,5)
    let hidStar=(first.length-visible.length);
    let stars="*".repeat(hidStar)
    return visible + stars + '@' + last
}
hidEmail()