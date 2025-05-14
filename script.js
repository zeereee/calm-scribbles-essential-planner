
function checkCode() {
    const code = document.getElementById("accessCode").value.trim();
    const validCode = "calm2025";
    if (code === validCode) {
        document.getElementById("downloads").classList.remove("hidden");
    } else {
        alert("Invalid code. Please try again.");
    }
}
