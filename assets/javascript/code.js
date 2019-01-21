$(document).ready(function() {

    let animals = ['dog','puppy','cat','kitten','bird','rabbit','squirrel','shark','hamster','ferret','sugar glider','chinchilla','skunk']

    function drawButtons() {
        $('#buttons').empty()
        for (let i in animals) {
            let btn = $('<div>').text(animals[i]).attr('data-animal',animals[i])
            btn.addClass('btn btn-primary').appendTo($('#buttons'))
        }
    }

    function addAnimal() {
        event.preventDefault()
        animals.push($('#add-animal').val().trim())
        drawButtons()
    }

    function getGif() {
        $('#images').empty()
        let target = $(this).attr('data-animal')
        let key = '&api_key=ykFsBmZdBFsAC5DL9JfMNh01AZK5WaJM'
        let limit = '&limit=10'
        let rating = '&rating=pg13'
        let url = "https://api.giphy.com/v1/gifs/search?q=" + target + key + limit + rating
        $.get(url)
        .then(function(r){
            for (let i = 0; i < 10; i++) {
                let movie = r.data[i].images.fixed_height.url
                let still = r.data[i].images.fixed_height_still.url
                console.log(r.data[i].rating)
                let rating = $('<div>').text('Rating: ' + r.data[i].rating)
                let img = $('<img>').attr('src',still)
                let obj = $('<div>').addClass('gif-box')
                img.attr('data-still',still).attr('data-movie',movie)
                img.attr('data-state','still')
                obj.html(rating)
                img.appendTo(obj)

                obj.appendTo($('#images'))
            }
        })
    }

    function changeURL() {
        let state = $(this).attr('data-state'), url
        if (state === 'still') {
            state = 'movie'
            url = $(this).attr('data-movie')
        } else {
            state = 'still'
            url = $(this).attr('data-still')
        }
        $(this).attr('src',url).attr('data-state',state)
    }

    $(document).on('click','#animal-btn',addAnimal)
    $(document).on('click','.btn',getGif)
    $(document).on('click','img',changeURL)
    drawButtons()
})