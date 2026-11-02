const video = document.getElementById("jr_app_demo_video_src")
const JrSignupButton = document.getElementById("JrSignup");
const RangerSignupButton = document.getElementById("RangerSignup");
const SwitchUsersButton = document.getElementById("SwitchUsers");
const SwitchClubsButton = document.getElementById("SwitchClubs");
const postingAndReactingButton = document.getElementById("postingAndReacting");

JrSignupButton.addEventListener("click", function() {
    changeVideo("videos/jr_signup.mp4");
    SelectButton(JrSignupButton);
});

RangerSignupButton.addEventListener("click", function() {
    changeVideo("videos/ranger_signup.mp4");
    SelectButton(RangerSignupButton);
});

SwitchUsersButton.addEventListener("click", function() {
    changeVideo("videos/switch_acc.mp4");
    SelectButton(SwitchUsersButton);
});

SwitchClubsButton.addEventListener("click", function() {
    changeVideo("videos/switch_clubs.mp4");
    SelectButton(SwitchClubsButton);
});

postingAndReactingButton.addEventListener("click", function() {
    changeVideo("videos/announcementPostAndReact.mp4");
    SelectButton(postingAndReactingButton);
});

function SelectButton(buttonHTMLElement){
    SetAllButtonsToUnselectedClass();
    buttonHTMLElement.className = "primary";
}

function SetAllButtonsToUnselectedClass(){
    JrSignupButton.className = "secondary";
    RangerSignupButton.className = "secondary";
    SwitchUsersButton.className = "secondary";
    SwitchClubsButton.className = "secondary";
    postingAndReactingButton.classList = "secondary";
}

function changeVideo(filename) {
    video.src = filename;
    video.parentElement.load();
}