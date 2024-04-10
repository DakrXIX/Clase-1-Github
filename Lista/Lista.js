function searchname() {
    var searchedname = document
      .getElementById("search")
      .value.toLowerCase();

    var contacts = document.getElementsByClassName("contact");

    for (var i = 0; i < contacts.length; i++) {
      var nameH3 = contacts[i]
        .getElementsByClassName("contact-info")[0]
        .getElementsByTagName("h3")[0]
        .textContent.toLowerCase();

      if (nameH3 === searchedname) {
        contacts[i].scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    alert("Name not found");
  }