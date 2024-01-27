AFRAME.registerComponent('my-custom-component', {
    init: function () {
        
        this.el.addEventListener('click', function () {
           
            alert('You clicked the custom component!');
        });
    }
});
