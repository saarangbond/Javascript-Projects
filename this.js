// method -> obj
// function -> global (window, node)

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
        }, this);
    },
    play() {
        console.log(this);
    }
};

video.showTags();

/*
function Video(title){
    this.title = title;
    console.log(this);
}

const v = new Video('b');
*/