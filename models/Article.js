class Article {
    // Automatic implementation of "id", "creatorId", "image" & "dates" by the server 
    constructor(message,genre,pseudo,dates){
        this.message = message
        this.genre = genre
        this.dates = dates
        this.pseudo = pseudo
        this.voteFor = 0
        this.voteAgainst = 0
        this.userFor = JSON.stringify([])
        this.userAgainst = JSON.stringify([])
    }
}
module.exports =  Article