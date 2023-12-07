document.addEventListener("DOMContentLoaded", function() {
    var image = document.getElementById("fade-in-image");
    setTimeout(function() {
        image.style.opacity = 1;
    }, 100);
});

document.addEventListener('DOMContentLoaded', function () {
    // Get all remove buttons
    var removeButtons = document.querySelectorAll('.remove-button');

    // Add click event listener to each remove button
    removeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Find the parent cart-item and remove it
            var cartItem = this.closest('.cart-item');
            if (cartItem) {
                cartItem.remove();
            }
        });
    });
});

function toggleHeart(icon) {
    if (icon.innerHTML.includes("heart-unchecked")) {
        icon.innerHTML = '<img src="./img/heart-checked.png" alt="heart icon" style="width:16px;height:16px;">';
    } else {
        icon.innerHTML = '<img src="./img/heart-unchecked.png" alt="heart icon" style="width:16px;height:16px;">';
    }
}