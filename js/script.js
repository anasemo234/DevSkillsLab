



$('button').click(function(){
    let $input = $("#form").val();              //pull out text from text boxinput
    $('#new-skill').append(`<li><button>Remove</button>${$input}</li>`)    // stores text box input into a list
    $('#form').val(' ');                                                // when user enters input it will leave it empty instead of save last input in input box
})


$('#new-skill').on('click', 'button', function(){
    $(this).closest('li').fadeOut(200, function (){
        $(this).remove()
    })
})

// $('new-skill').on('click', function(){
//     let $input = $('form').val();
//     $('new-skill').appendChild(`<ul id= 'new-skill' ${$input} </ul>`)
//     $('input').val(' ');
// })





// const li = document.createElement('li');
// function hardSkills() {
//     const li = document.createElement('li');
//     li.innerText = input;
//     $('ul').appendChild($li);
//     document.getElementsByClassName('form').value = null
// };
// $('#add').on('click', hardSkills);
// // li.innerText = input;
// $('#add').on('click', function(){
//     $('new-skill').append(``)
// })





// 1) pull text out of text box of the input
// const li = document.createElement('li');
// 2) add the text to the li 
// function softSkills() {
//     li.innerText = input;
//     document.querySelector('skills-list').appendChild(li);
//     document.getElementById('.form') = null
// }

// $(.add).on('click', softSkills);
// 3)  document.getElementById('skills-list').append('li')
// set text box to null value

// $('button').click(function(){
//     $('#new-skill').appendChild('li')
// })