import { tag, WeElement } from "omi"
import style from "./_index.css"

@tag("app-intro")
class AppIntro extends WeElement {
	css() {
		return (
			style +
			`
    code{
      color: ${Math.random() > 0.5 ? "red" : "blue"}
    }`
		)
	}

	render(props, data) {
		return (
			<p class="app-intro">
				To get started, edit <code>src/elements/*/*.*</code> and save to reload.
			</p>
		)
	}
}
