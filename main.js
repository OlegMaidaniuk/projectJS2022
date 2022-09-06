fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            let user_div = document.createElement('div');
            user_div.classList.add('user');
            document.body.appendChild(user_div);

            let h2 = document.createElement('h2');
            h2.innerHTML = user.id + ' ' + user.name;
            user_div.appendChild(h2);
            
            let a = document.createElement('a');
            a.href = `user-details.html?id=${user.id}`;
            a.innerText = 'Info about user';
            user_div.appendChild(a);
        }
    });
