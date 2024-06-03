var websiteNameInput = document.getElementById("websiteName");
var websiteUrlInput = document.getElementById("websiteUrl");
var webItemsInput = document.getElementById("displayWebs");
var addBtnInput = document.getElementById("addBtn");
var webs = [];

function clearForm() {
  websiteNameInput.value = "";
  websiteUrlInput.value = "";
}

function addWeb() {
  if (validateForm(websiteName) && validateForm(websiteUrl)) {
    var web = {
      def: websiteNameInput.value,
      url: websiteUrlInput.value,
    };
    webs.push(web);
    clearForm();
    displayWebs(webs);
  }
}

function displayWebs(container) {
  var cartona = "";
  for (var i = 0; i < webs.length; i++) {
    cartona += `<div
                        class="item w-100 d-flex border border-1 p-3 rounded-3 justify-content-between mb-2"
                      >
                        <h4>${container[i].def}</h4>
                        <div class="btns">
                          <a href="${container[i].url}" class="btn py-1 px-2 border-0 fs-5 rounded-2 btn-success">
                            View
                          </a>
                          <a class="btn py-1 px-2 fs-5 rounded-2 btn-outline-danger" onclick="deleteItem(${i})">
                            Delete
                          </a>
                        </div>
                      </div>`;
  }
  document.getElementById("displayWebs").innerHTML = cartona;
}

function deleteItem(choosen) {
  webs.splice(choosen, 1);
  displayWebs(webs);
}

function validateForm(element) {
  counter = 0;
  regex = {
    websiteName: /^[A-Z][a-z][a-z][a-z]+$/,
    websiteUrl:
      /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/,
  };
  var isvalidat = regex[element.id].test(element.value);

  if (isvalidat) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    element.nextElementSibling.classList.add("d-none");
    element.nextElementSibling.classList.remove("d-block");
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    element.nextElementSibling.classList.remove("d-none");
    element.nextElementSibling.classList.add("d-block");
  }

  return isvalidat;
}
