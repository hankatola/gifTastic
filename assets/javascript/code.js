$(document).ready(function() {

    let animals = ['dog','puppy','cat','kitten','bird','rabbit','squirrel','shark','hamster','ferret','sugar glider','chinchilla','skunk']

    function drawButtons() {
        $('#buttons').empty()
        for (let i in animals) {
            let btn = $('<div>').text(animals[i]).attr('data-animal',animals[i])
            btn.addClass('btn btn-primary').appendTo($('#buttons'))
            btn.on('click',getGif)
        }
    }

    function addAnimal() {
        event.preventDefault()
        animals.push($('#add-animal').val().trim())
        drawButtons()
    }

    function getGif() {
        let target = $(this).attr('data-animal')
        let key = '&api_key=ykFsBmZdBFsAC5DL9JfMNh01AZK5WaJM'
        let limit = '&limit=10'
        let url = "https://api.giphy.com/v1/gifs/search?q=" + target + key + limit


        $.get(url)
        .then(function(r){
            console.log(r)
        })
        console.log(target)
    }

    $(document).on('click','#btn',addAnimal)
    $(document).on('click','.btn',getGif)
    drawButtons()
})