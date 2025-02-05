import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="search-movies"
export default class extends Controller {
  static targets = ["form", "input", "list"]

  update() {
    const url = `${this.formTarget.action}?query=${this.inputTarget.value}`
    fetch(url, {
      headers: {"Accept": "text/plain"}
    })
      .then(response => response.text())
      .then((data) => {
        this.listTarget.outerHTML = data
        this.listTarget.classList.remove("d-none")
        if (this.inputTarget.value === "") {
          this.listTarget.classList.add("d-none")
        }
      })
  }
}
