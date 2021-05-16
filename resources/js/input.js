let counter2 = 0;
var dummy_value;

function checking_the_mobile_no(phoneno) {
  let flag = 0;
  for (let i = 0; i < phoneno.length; i++) {
    if (phoneno[i] >= "a" && phoneno[i] <= "z") {
      flag = 1;
      break;
    }
  }

  if (flag === 1) {
    flag = 0;
    alert("mobile no. should be numeric");
    counter2 = counter2 + 1;
  }

  if (phoneno.length != 10) {
    alert("plz enter valid mobile no.");
    counter2 = counter2 + 1;
  }
}

function notification(name, email, sub, textarea, phoneno) {
  if (counter2 === 0) {
    document.write("<h3> Customer Details: </h3>");
    document.write(" Name:   " + name + "<br><br>");
    document.write(" Email:   " + email + "<br><br>");
    document.write(" Mobile No:   " + phoneno + "<br><br>");
    document.write(" How did you find us?:   " + sub + "<br><br>");
    document.write("Yes, please:   " + dummy_value + "<br><br>");
    document.write(" Drop us a line:   " + textarea + "<br>");
    document.write("<h3>  Thanks for Registering  </h3>");
  }
}

function news_checking(news) {
  if (news.checked == true) {
    dummy_value = "checked";
  } else {
    dummy_value = "unchecked";
  }
}

function checking_first_name(fname) {
  let flag = 0;
  if (!fname) {
    alert(" name is required");
    counter2 = counter2 + 1;
  } else {
    for (let i = 0; i < fname.length; i++) {
      if (fname[i] >= "0" && fname[i] <= "9") {
        flag = 1;
        break;
      }
    }
    if (flag == 1) {
      flag = 0;
      alert("name should not contain any number");
      counter2 = counter2 + 1;
    }
  }
}

function subject_checking(sub) {
  if (sub.selectedIndex < 1) {
    alert("plz select the option");
    counter2 = counter2 + 1;
  }
}

function checking_data() {
  var name = document.querySelector("#name").value;
  var sub = document.getElementById("find-us");
  var news = document.getElementById("news");
  var textarea = document.getElementById("textarea");
  var email = document.getElementById("email").value;
  var phoneno = document.getElementById("mobileno").value;

  checking_first_name(name);
  checking_the_mobile_no(phoneno);
  subject_checking(sub);
  news_checking(news);
  notification(name, email, sub.value, textarea.value, phoneno);
}
