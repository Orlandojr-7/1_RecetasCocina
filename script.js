function toggleSteps(id) {
    const steps = document.getElementById(id);
    if (steps.style.display === "block") {
        steps.style.display = "none";
    } else {
        steps.style.display = "block";
    }
}
