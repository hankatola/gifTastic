$(document).ready(function() {

    let animals = ['dog','puppy','cat','kitten','bird','rabbit','squirrel','shark','hamster','ferret','sugar glider','chinchilla','skunk']

    function drawButtons() {
        for (let i in animals) {
            let btn = $('<div>').text(animals[i]).attr('data-animal',animals[i])
            btn.addClass('btn btn-primary').appendTo($('#buttons'))
        }
    }

    drawButtons()
})