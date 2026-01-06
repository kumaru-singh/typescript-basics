var profile1 = {
    username: "user123",
    bio: null,
    avatarUrl: undefined
};
var profile2 = {
    username: "user456",
    bio: " Hello, I'm user456",
    avatarUrl: "http://example.com/avatar.jpg"
};
console.log(profile1);
console.log(profile2);
function showProfile(profile) {
    var bioMessage = profile.bio === null ? "No bio available" : profile.bio;
    var defAvatarUrl = profile.avatarUrl ? profile.avatarUrl : "http://example.com/default-avatar.jpg";
    console.log("Username: ".concat(profile.username, " Bio: ").concat(bioMessage, " Avatar URL: ").concat(defAvatarUrl));
}
showProfile(profile1);
showProfile(profile2);
