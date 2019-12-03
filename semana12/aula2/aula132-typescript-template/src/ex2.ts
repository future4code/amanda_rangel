type post = {
    author: string;
    text: string;
};

const allPosts: post[] = [
    {
        author: "Amanda",
        text: "o significado do meu nome é: digna de ser amada "

    },
    {
        author: "Bernardo",
        text: "o significado do meu nome é: forte como um urso"
    },
    {
        author: "Daniel",
        text: "o significado do meu nome é: Deus é o meu juiz"
    },
    {
        author: "Thalita",
        text: "o significado do meu nome é: menina"
    },
    {
        author: "Amanda",
        text: "estou sem criatividade"
    }
];

function filterPostByAuthor(posts: post[], author: string) : post[] {
    return posts.filter((el: post) => {
        return el.author === author;
    });
}

filterPostByAuthor(allPosts, "Bernardo");
console.log(filterPostByAuthor(allPosts, "Bernardo"));

