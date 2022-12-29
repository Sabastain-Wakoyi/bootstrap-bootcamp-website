
function SubmitDetails() {

    var Num = 1

    var Name = document.getElementById('Name').value
    var number = document.getElementById('number').value
    var email = document.getElementById('email').value
    var DOB = document.getElementById('DOB').value
    var DOJ = document.getElementById('DOJ').value
    var expertise = document.getElementById('expertise').value

    var tbody = document.getElementById('tbody')

    alert('Name: '+Name+'\n\nPhone Number: '+number+'\n\nEmail: '+email+'\n\nDate of Birth: '+DOB+'\n\nDate of Joining: '+DOJ+'\n\nExpertise: '+expertise)

    tbody.innerHTML +=
        <tr>
            <th scope="row">${Num}</th>
            <td>$Name</td>
            <td>$number</td>
            <td>$email</td>
            <td>$DOB</td>
            <td>$DOJ</td>
            <td>$Expertise</td>

        </tr>


    Num++

}
