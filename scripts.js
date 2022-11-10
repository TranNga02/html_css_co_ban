 
$(document).ready(function(){
    $(".btn-show-page2").click(function(){
        var row = $(this).closest("tr");
        alert("Information\n" + "\nID: "+row.find('td:eq(0)').text()+"\nName: "+row.find('td:eq(1)').text()
            +"\nGroup: "+row.find('td:eq(2)').text());
    })
})
$(document).ready(function(){
    $(".btn-submit-page4").click(function(){
        $("#fullname").text($("#last-name").val()+" "+$("#first-name").val());
        $("#sex").text($('input[name="gender"]:checked').val());
        $("#nation").text($('#nationality').val());
    })
})
$(document).ready(function validate(){
    $.validator.addMethod("regex",function(value, element, regexp) {
          var re = new RegExp(regexp);
          return this.optional(element) || re.test(value);
        }
      );
    $("#form-page3").validate({
        rules: {
            "first-name": {
                required: true,
                maxlength: 25
            },
            "last-name": {
                required: true,
                maxlength: 25
            },
            "year-old": {
                required: true,
                range: [15,150]
            },
            "start-date": {
                required: true,
            },
            "phone": {
                required: true,
                regex:"[+][0-9]"
            }
        },
        messages:{
            "first-name":
            {
                required: "\tEnter your fisrt name",
            }, 
            "last-name": 
            {
                required:  "\tEnter your last name",
            },
            "year-old": 
            {
                required: "\tEnter your age",
            },
            "start-date":
            {
                required: "\tEnter your start day",
            },
            "phone": 
            {
                required: "\tEnter your phone number",
                regex: "\tExample: +0845117181"
            },
        }
    })
    $(".btn-submit-page3").click(function(e){
        if($("#form-page3").valid()==true){
        alert("Name: "+$("#first-name").val() + " " + $("#last-name").val() + "\nYear old: "+$("#year-old").val() 
        +"\nStart day: " + $("#start-date").val() + "\nPhone number: " + $("#phone").val());
        e.preventDefault();
        }
    })
})

