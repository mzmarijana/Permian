$(function() {
    var currencies = [{
        value: 'mzmarijana@gmail.com',
        data:  'Marijana',
        data3: 'Brown',
        data4: 'Weatherford',
        data5: 'Director',
        data6: '123-456-7809',
        data7: '333-777-9999',
        data8: 'Houston',
        data9: 'Texas',
        data10: 'Teri Bivens',
        data11: '210-111-222-3333',      
      }, ];

    // setup autocomplete function pulling from currencies[] array
    $('#autocomplete').autocomplete({
        lookup: currencies,
        onSelect: function(suggestion) {
            var thehtml = ' <strong style="color:#ce1141">Step 2: Validate Contact Info</strong><br><strong>Contact Status:</strong> Current Contact<br><strong>Email:</strong> ' + suggestion.value + ' <br> <strong>First Name:</strong> ' + suggestion.data + ' <br> <strong>Last Name:</strong> ' + suggestion.data3 + ' <br> <strong>Company:</strong> ' + suggestion.data4  + ' <br> <strong>Job Title:</strong> ' + suggestion.data5 + ' <br> <strong>Phone Number:</strong> ' + suggestion.data6 + ' <br> <strong>Mobile:</strong> ' + suggestion.data7 + ' <br> <strong>City:</strong> ' + suggestion.data8 + '<br> <strong>State:</strong> ' + suggestion.data9 + '<br> <strong style="color:#ce1141">Account Manager:</strong> ' + suggestion.data10 + '<br><strong style="color:#ce1141">Account Manager Phone: </strong>' + suggestion.data11;        
                        
            
            $('#outputcontent').html(thehtml);
        }
    });


});
