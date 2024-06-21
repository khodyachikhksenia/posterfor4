document.addEventListener("DOMContentLoaded", function() {

    document.addEventListener('mousemove', function(event) {
        const cursor = document.querySelector(".cursor");
        if (cursor) {
            cursor.style.left = event.pageX + 'px';
            cursor.style.top = event.pageY + 'px';
        }
    });

    
    const plants = document.querySelectorAll('.plant-container img');
    plants.forEach(function(plant) {
        plant.addEventListener('click', function(event) {
            event.preventDefault();  
            let rotation = (parseInt(plant.style.transform.replace(/[^0-9]/g, ''), 10) || 0) + 90;
            plant.style.transform = 'rotate(' + rotation + 'deg)';
        });
    });
});
