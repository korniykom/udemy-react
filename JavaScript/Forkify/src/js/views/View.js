import icons from "../../img/icons.svg";

export default class View {
  _data;

  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();

    if (!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  update(data, render = true) {
    this._data = data;
    const newMarkup = this._generateMarkup();

    if (!render) {
      return markup;
    }

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll("*"));
    const currentElements = Array.from(
      this._parentElement.querySelectorAll("*")
    );
    console.log(currentElements);
    console.log(newElements);

    newElements.forEach((newElement, i) => {
      const currentElement = currentElements[i];
      console.log(currentElement, newElement.isEqualNode(currentElement));
      if (
        !newElement.isEqualNode(currentElement) &&
        newElement.firstChild?.nodeValue.trim() !== ""
      ) {
        currentElement.textContent = newElement.textContent;
      }
      if (!newElement.isEqualNode(currentElement))
        Array.from(newElement.attributes).forEach((attr) =>
          currentElement.setAttribute(attr.name, attr.value)
        );
    });
  }
  _clear() {
    this._parentElement.innerHTML = "";
  }

  renderSpinner = function () {
    const markup = `
     <div class="spinner">
            <svg>
              <use href="${icons}#icon-loader"></use>
            </svg>
          </div> `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  };
  renderError(message = this._errorMessage) {
    const markup = `
          <div class="error">
                <div>
                  <svg>
                    <use href="${icons}#icon-alert-triangle"></use>
                  </svg>
                </div>
                <p>${message}</p>
              </div> `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  renderMessage(message = this._message) {
    const markup = `
          <div class="message">
                <div>
                  <svg>
                    <use href="${icons}#icon-smile"></use>
                  </svg>
                </div>
                <p>${message}</p>
              </div> `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}
