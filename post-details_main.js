let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/1/posts?id=${id}`)
    .then(resp => resp.json())
    .then(values => {
        let post_info_div = document.createElement('div');
        post_info_div.classList.add('post_info_div');
        document.body.appendChild(post_info_div);

        let post_info_small_div = document.createElement('div');
        post_info_small_div.classList.add('post_info_small_div');


        let post_info = (value) => {
            for (const data in value) {
                if (typeof value[data] !== 'object') {
                    let p = document.createElement('p');
                    p.innerText = `${data}: ${value[data]}`;
                    post_info_small_div.appendChild(p);
                } else {
                    post_info(value[data]);
                }
            }
        }
        post_info(values);
        post_info_div.appendChild(post_info_small_div);
    });


fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(resp => resp.json())
    .then(items => {

        let comment_div = document.createElement('div');
        comment_div.classList.add('comment_div');
        document.body.appendChild(comment_div);

        for (const item of items) {
            let comment_small_div = document.createElement('div');
            comment_small_div.classList.add('comment_small_div');

            for (const itemKey in item) {
                    let p = document.createElement('p');

                    p.innerText = `${itemKey}: ${item[itemKey]}`;

                    comment_small_div.appendChild(p);
                }
            comment_div.appendChild(comment_small_div);
        }

    });
