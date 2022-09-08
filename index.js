
var para  = ["My friends and I are crazy. That’s the only thing that keeps us sane",
            "Friendship is not a big thing, it’s a million little things",
            "A snowball in the face is surely the perfect beginning to a lasting friendship",
            "I don’t like to commit myself to heaven and hell – you see, I have friends in both places",
            "Good times and crazy friends make the best memories",
            "Most of us don’t need a psychiatric therapist as much as a friend to be silly with"];
    var i = Math.floor(Math.random() * 6);
    var paragrap = para[i];
    $("p").html(paragrap);

    $(document).ready(function(){
       
       
            $(".btn-s").click(function(){ 
                var str = $("#demon-id").val();
                let result = findFunnyName(str);
                $("#demon-id").val('');
                $(".answer").html("Your funny Name is: "+ result);
                 });
           
            
    });
   

    function findFunnyName(str) {
  
        let alfa = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
          'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];//26
        let len = Math.floor(str.length / 2); //2
        let looplength = len;
        for (let i = 0; i <= looplength; i++) {
      
          j = Math.floor(Math.random() * 26);
           str = str.replace(str[len],alfa[j]);
            len++;
        }
      
        return str;
      
      }

      