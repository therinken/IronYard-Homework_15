_.templateSettings.interpolate = /{([\s\S]+?)}/g;

var gitProBasic = [
    '<img src="{avatar_url}">',
        '<h2>{name}</h2>',
        '<h4>{login}</h4>',
        '<ul class="flex-container">',
            '<li class="flex-item">',
            ' {company} ',
            ' {location} ',
            ' {email} ',
            ' {blog} ',
            '</li>',
        '</ul>'
].join('');

function writeToDom(data) {
    document.body.innerHTML = _.template(gitProBasic, data);
}

$.getJSON("https://api.github.com/users/therinken").then(writeToDom)