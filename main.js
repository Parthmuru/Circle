canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "";
var color = "black";
var width = 2;
var radius = 40;

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "red";
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    mouseEvent = "mousedown";
    console.log(mouseEvent);
color = document.getElementById("colorInput").value;
width = document.getElementById("widthInput").value;
radius = document.getElementById("radiusInput").value;  
}


canvas.addEventListener("mouseleave", my_mouseleave);
    
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
 }
    
    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {              
            
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mousedown") {
            
        console.log("Current position of x and y coordinates = ");
            console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
            ctx.stroke();                  
                
        }             
            }
