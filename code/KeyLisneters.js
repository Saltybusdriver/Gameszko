addEventListener("keydown", function(event) 
{
    if (event.code == 'KeyD' || event.code == 'ArrowRight') vx = 5;
})

addEventListener("keyup", function(event) 
{
    if (event.code == 'KeyD' || event.code == 'ArrowRight') vx = 0;
})



addEventListener("keydown", function(event) 
{
    if (event.code == 'KeyA' || event.code == 'ArrowLeft') vx = -5;
})

addEventListener("keyup", function(event) 
{
    if (event.code == 'KeyA' || event.code == 'ArrowLeft') vx = 0;
})



addEventListener("keydown", function(event) 
{
    if (event.code == 'KeyS'  || event.code == 'ArrowDown') vy = 5;
})

addEventListener("keyup", function(event) 
{
    if (event.code == 'KeyS'  || event.code == 'ArrowDown') vy = 0;
})



addEventListener("keydown", function(event) 
{
    if (event.code == 'KeyW'  || event.code == 'ArrowUp') vy = -5;
})

addEventListener("keyup", function(event) 
{
    if (event.code == 'KeyW'  || event.code == 'ArrowUp') vy = 0;
})

