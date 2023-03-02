function calculate() {
    let width = document.getElementById("width").value;
    let height = document.getElementById("height").value;

    if (width && height) {
        alert("Please enter either width or height, not both!");
        return;
    }

    if (!width && !height) {
        alert("Please enter either width or height!");
        return;
    }

    if (width) {
        let aspectRatio = 1200 / 628;
        let calculatedHeight = Math.round(width / aspectRatio);
        document.getElementById("result").innerHTML = "Calculated height: " + calculatedHeight + "px";
    } else {
        let aspectRatio = 628 / 1200;
        let calculatedWidth = Math.round(height / aspectRatio);
        document.getElementById("result").innerHTML = "Calculated width: " + calculatedWidth + "px";
    }
}

let submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click', calculate);

