let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(resp => resp.json())
    .then(values => {
        let div = document.createElement('div');
        div.classList.add('info')
        let user_info = (value) => {
            for (const data in value) {
                if (typeof value[data] !== 'object') {
                    let p = document.createElement('p');
                    p.innerText = `${data}: ${value[data]}`;
                    div.appendChild(p);
                } else {
                    user_info(value[data]);
                }
            }
        }
        user_info(values);
        document.body.appendChild(div);
    });


let button = document.createElement('button');
button.innerText = 'post of current user';
button.onclick = function () {

    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(value => value.json())
        .then(posts => {
            let post_small_div = document.createElement('div');
            post_small_div.classList.add('post_small_div');
            document.body.appendChild(post_small_div)
            for (const post of posts) {
                let post_div = document.createElement('div');
                post_div.classList.add('post');

                post_small_div.appendChild(post_div);

                let post_p = document.createElement('p')
                post_p.innerHTML = post.title;

                post_div.appendChild(post_p);

                let a = document.createElement('a');
                a.href = `post-details.html?id=${post.id}`;
                a.innerText = 'Info about user';
                post_div.appendChild(a);
            }

        });

}
document.body.appendChild(button);
