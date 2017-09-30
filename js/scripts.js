   var api = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=9&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=";

   $('input[type="text"]').on('keypress', function(e) {

       var search = $(this).val();

       if (e.keyCode === 13) {

           $('.container').attr('class', 'container-top');
           $('ul').empty();
           $.ajax({
               url: api + search,
               dataType: "JSONP",
               type: "get",
               success: function(json) {
                   var data = json.query.pages,
                       pgs = Object.keys(data);

                   pgs.forEach(function(elem) {
                       createElem(data[elem].title, data[elem].extract, data[elem].pageid);
                   });

               }


           });
       }
   })

   function createElem(title, text, id) {
       var a = $(document.createElement('a')),
           li = $(document.createElement('li')),
           h2 = $(document.createElement('h2')).text(title),
           p = $(document.createElement('p')).text(text),
           link = 'https://en.wikipedia.org/?curid=';
       li.append(h2, p);
       a.append(li);
       a.attr('href', link + id);
       $('ul').append(a).hide().fadeIn(500);

   }

   // $('#start').on('click', function() {
   //     $.getJSON("https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=15&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=polska&callback=?",
   //         function(json) {
   //             var data = json.query.pages,
   //                 pgs = Object.keys(data);

   //             pgs.forEach(function(elem) {
   //                 console.log(data[elem].title);
   //             })


   //             // console.log(json.query.pages);
   //             // console.log("worked");
   //         });

   // })