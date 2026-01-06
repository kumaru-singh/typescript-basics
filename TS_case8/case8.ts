type Profile =  {
    username : string,
    bio : string | null, 
    avatarUrl ?: string
}

let profile1 : Profile = {
    username : "user123",
    bio : null,
    avatarUrl : undefined
}

let profile2 : Profile = {
    username : "user456",
    bio : " Hello, I'm user456",
    avatarUrl : "http://example.com/avatar.jpg"
}

console.log(profile1);
console.log(profile2);

function showProfile(profile : Profile ){
   const bioMessage = profile.bio === null ? "No bio available" : profile.bio;
   const defAvatarUrl = profile.avatarUrl ? profile.avatarUrl : "http://example.com/default-avatar.jpg";
   console.log(`Username: ${profile.username} Bio: ${bioMessage} Avatar URL: ${defAvatarUrl}`);
}

showProfile(profile1);
showProfile(profile2);


/*

PS D:\NPTEL_Case_Study\TS_case8> node  .\case8.js
{ username: 'user123', bio: null, avatarUrl: undefined }
{
  username: 'user456',
  bio: " Hello, I'm user456",
  avatarUrl: 'http://example.com/avatar.jpg'
}
Username: user123 Bio: No bio available Avatar URL: http://example.com/default-avatar.jpg
Username: user456 Bio:  Hello, I'm user456 Avatar URL: http://example.com/avatar.jpg


*/