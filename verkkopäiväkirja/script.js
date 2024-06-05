$(document).ready(function() {
 
    let entries = [];


    if (localStorage.getItem('diaryEntries')) {
        entries = JSON.parse(localStorage.getItem('diaryEntries'));
        displayEntries();
    }

    
    $('#diaryEntryForm').submit(function(e) {
        e.preventDefault();

       
        let title = $('#title').val();
        let content = $('#content').val();

      
        let entry = {
            title: title,
            content: content,
            date: new Date().toLocaleString()
        };

       
        entries.push(entry);

    
        localStorage.setItem('diaryEntries', JSON.stringify(entries));

      
        $('#title').val('');
        $('#content').val('');

        displayEntries();
    });

    function displayEntries() {
        $('#entriesList').empty();

        if (entries.length === 0) {
            $('#entriesList').append('<li class="list-group-item">No entries found.</li>');
        } else {
            entries.forEach(function(entry) {
                let listItem = `<li class="list-group-item">
                                    <h5>${entry.title}</h5>
                                    <p>${entry.content}</p>
                                    <small>${entry.date}</small>
                                </li>`;
                $('#entriesList').append(listItem);
            });
        }
    }
});