var para  = ["My friends and I are crazy. That’s the only thing that keeps us sane",
            "Friendship is not a big thing, it’s a million little things",
            "A snowball in the face is surely the perfect beginning to a lasting friendship",
            "I don’t like to commit myself to heaven and hell – you see, I have friends in both places",
            "Good times and crazy friends make the best memories",
            "Most of us don’t need a psychiatric therapist as much as a friend to be silly with"];
    var i = Math.floor(Math.random() * 6);
    var paragrap = para[i];
    document.getElementById("para").innerHTML = paragrap;
