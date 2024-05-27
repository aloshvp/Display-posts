
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        //console.log(data);
        if (data && data.length > 0) {
            //Display only 18 items
            const posts = data.slice(0, 18).map((item) => {
                return `<div class='postitem' key=${item.id}>
                <h2>${reduceLength((item.title), 50)}</h2>
                <p>${reduceLength((item.body), 120)}</p>
                </div > `
            })
            $('#postItemWrap').html(posts)
        }
        else {
            $('#postItemWrap').html(`<p class="text-danger mx-auto"> No data found <p> `)
        }
    } catch (error) {
        console.error('Error:', error);
        $('#postItemWrap').html(`<p class="text-danger mx-auto"> No data found <p>`)
    }
}

fetchData();

function reduceLength(word, len) {
    return word.length > len ? word.slice(0, len) + "..." : word;
}
