function SubmitDetails() {
    var Name = document.getElementById('Name').value
    var number = document.getElementById('number').value
    var email = document.getElementById('email').value
    var DOB = document.getElementById('DOB').value
    var DOJ = document.getElementById('DOJ').value
    var expertise = document.getElementById('expertise').value

    alert('Full Name: '+Name+'\n\nPhone Number: '+number+'\n\nEmail: '+email+'\n\nDate of Birth: '+DOB+'\n\nDate of Joining: '+DOJ+'\n\nExpertise: '+expertise)

}
