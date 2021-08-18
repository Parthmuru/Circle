canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "red";
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {

    color = document.getElementById("colorInput").value;
    width = document.getElementById("widthInput").value;
    radius = document.getElementById("radiusInput").value;
    mouseEvent = "";
    
    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;
    drawCircle(mouseX, mouseY);
}


canvas.addEventListener("mouseleave", my_mouseleave);
    
    function my_mouseleave(e)
    {
        console.log("mousestart");
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
       last_position_of_x = e.clientX - canvas.offsetLeft;
       last_position_of_y = e.clientY - canvas.offsetTop;
            }
    
    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if(mouseEvent == "mousedown"){
            
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
            
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
        }
                        
            }
