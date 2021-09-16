$(document).ready(function() {
    $.get("people.json", function(people) {
        $.each(people, function(key, person) {
            console.log(person.name);
            $("#people ol").append('<li>'+person.name+"</li>");
        });
    });
});
